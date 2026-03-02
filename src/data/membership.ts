export interface MemberBenefitCardProps {
    title: string;
    image: string;
}

export const _memberBenefits: MemberBenefitCardProps[] = [
    {
        title: "24/7 Keycard Access",
        image: "icons/keycard.png"
    },
    {
        title: "Dedicated Member Storage",
        image: "icons/storage.png"
    },
    {
        title: "Save $10 off all classes",
        image: "icons/discount.png"
    }
];

export interface MemberPriceCardProps {
    title: string;
    termMonths: number;
    termCost: number;
    monthCost: number;
    isBestValue?: boolean;
}

export const _memberPrices: MemberPriceCardProps[] = [
    {
        title: "3 Month",
        termMonths: 3,
        termCost: 300,
        monthCost: 100
    },
    {
        title: "6 Month",
        termMonths: 6,
        termCost: 450,
        monthCost: 75
    },
    {
        title: "1 Year",
        termMonths: 12,
        termCost: 600,
        monthCost: 50,
        isBestValue: true
    }
];
