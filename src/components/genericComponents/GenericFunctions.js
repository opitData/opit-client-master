import React from 'react';
import { useTranslation } from 'react-i18next';

// const { t } = useTranslation();
export function returnTitle() {
    const { t } = useTranslation();
    let date = new Date()
    let hour = date.getHours();
    if (hour < 12 && hour > 5)
        return t(`${'home'.toString()}.titleMorning`)
    else if (hour > 11 && hour < 16)
        return t(`${'home'.toString()}.titleNoon`)
    else if (hour > 15 && hour < 19)
        return t(`${'home'.toString()}.titleAfternoon`)
    else if (hour > 18 && hour < 21)
        return t(`${'home'.toString()}.titleEvening`)
    else
        return t(`${'home'.toString()}.titleNight`)
}

