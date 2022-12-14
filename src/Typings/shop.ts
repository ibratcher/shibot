export type shop = {
    pickupBrand: {
        brand: {
            name: string;
            image: {
                url: string;
            }
            usualGearPower: {
                name: string;
                image: {
                    url: string;
                }
                desc: string;
            }
        }
        image: {
            url: string;
        }
        saleEndTime: string;
        brandGears: [
            {
                price: number;
                gear: {
                    name: string;
                    brand: {
                        name: string;
                        image: {
                            url: string;
                        }
                    }
                    image: {
                        url: string;
                    }
                    primaryGearPower: {
                        name: string;
                        image: {
                            url: string;
                        }
                    }
                    additionalGearPowers: [
                        {
                            name: string;

                        }
                    ]
                }
            }
        ]

    }
    limitedGears: [
        {
            saleEndTime: string;
            price: number;
            gear: {
                name: string;
                brand: {
                    name: string;
                    image: {
                        url: string;
                    }
                }
                image: {
                    url: string;
                }
                primaryGearPower: {
                    name: string;
                    image: {
                        url: string;
                    }
                }
                additionalGearPowers: [
                    {
                        name: string;

                    }
                ]
            }

        }
    ]
}