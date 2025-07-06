export const now = new Date().toISOString();

export function getDatePlusMinutes(minutesToAdd) {
    const now = new Date();
    now.setMinutes(now.getMinutes() + minutesToAdd);
    return now.toISOString();
}
