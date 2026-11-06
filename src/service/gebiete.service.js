import cron from "node-cron";

import { changeClanId, createNewFight, endFight, getAllGebiete, getExpiredFights, getFightClans } from "../repositories/gebiete.repositories.js";

export async function allGebiete() {
    const gebiete = await getAllGebiete()
    return gebiete
}

export async function changeRegionClan(data) {
    const result = await changeClanId(data)
    return result
}

//Kampf starten
export async function startRegionBattle(ids) {
    const fights = await createNewFight(ids)
    return fights
}

//Sieger ermitteln mit CRON-JOB --> * * * * * „Führe die Aufgabe jede Minute, jede Stunde, jeden Tag, jeden Monat und an jedem Wochentag aus.“

// */5 * * * * –> Alle 5 Minuten
// * * * * –> Einmal pro Stunde (immer zur Minute 0)
// 0 0 * * * –> Jeden Tag um Mitternacht (00:00 Uhr)
// 0 12 * * 1 –> Jeden Montag um genau 12:00 Uhr
export async function evaluateExpiredFights() {
    try {
        const expiredFights = await getExpiredFights();

        for (const fight of expiredFights) {
            const fightId = fight.gebietskampf_id;
            const clans = await getFightClans(fightId);

            if (clans.length === 2) {
                // 50/50 Zufall: Würfle Index 0 oder Index 1
                const randomIndex = Math.floor(Math.random() * clans.length);
                const siegerId = clans[randomIndex];

                await endFight(fightId, siegerId);
                console.log(`Kampf ${fightId} nach 10 min beendet! Gewinner Clan-ID: ${siegerId}`);
            } else {
                // Sicherheitsnetz: Falls Daten unvollständig sind, ohne Sieger schließen
                await endFight(fightId, null);
                console.warn(`Kampf ${fightId} hatte keine 2 Clans und wurde abgebrochen.`);
            }
        }
    } catch (error) {
        console.error("[CRON FEHLER] Fehler bei der Kampfauswertung:", error);
    }
}

cron.schedule("* * * * *", async () => {
    console.log("Prüfung der abgelaufenen Kämpfe mit CRON wird gestartet...");
    await evaluateExpiredFights(); 
});