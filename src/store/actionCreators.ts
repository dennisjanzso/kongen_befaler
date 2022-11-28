import * as actionTypes from "./actionTypes"

export function updateScore(name: string, score: number) {
    console.log("action", score)
    var action;
    switch (name) {
        case "Eirik":
            action = {
                type: actionTypes.UPDATE_EIRIK,
                payload: score,
            }
            break;
        case "Silje":
            action = {
                type: actionTypes.UPDATE_SILJE,
                payload: score,
            }
            break;
        case "Thilla":
            action = {
                type: actionTypes.UPDATE_THILLA,
                payload: score,
            }
            break;
        case "Fredrik":
            action = {
                type: actionTypes.UPDATE_FREDRIK,
                payload: score,
            }
            break;
    }
    return action;
}
