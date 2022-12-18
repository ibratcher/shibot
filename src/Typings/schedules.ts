export type schedules = {
    regularSchedules: {
        nodes: [
            {
                startTime: string;
                endTime: string;
                regularMatchSetting: {
                    vsStages: [
                        {
                            name: string;
                            image: {
                                url: string;
                            }
                        },
                        {
                            name: string;
                            image: {
                                url: string;
                            }
                        }
                    ]
                }
            }
        ]
    }
    bankaraSchedules: {
        nodes: [
            {
                startTime: string;
                endTime: string;
                bankaraMatchSettings: [
                    {
                        vsStages: [
                            {
                                name: string;
                                image: {
                                    url: string;
                                }
                            },
                            {
                                name: string;
                                image: {
                                    url: string;
                                }
                            }],
                        vsRule: {
                            name: string;
                        }
                    },
                    {
                        vsStages: [
                            {
                                name: string;
                                image: {
                                    url: string;
                                }
                            },
                            {
                                name: string;
                                image: {
                                    url: string;
                                }
                            }],
                        vsRule: {
                            name: string;
                        }
                    }
                ]
            },
            {
                startTime: string;
                endTime: string;
                bankaraMatchSettings: {
                    vsStages: [
                        {
                            name: string;
                            image: {
                                url: string;
                            }
                        },
                        {
                            name: string;
                            image: {
                                url: string;
                            }
                        }],
                    vsRule: {
                        name: string;
                    }
                }
            }]
    }
    xSchedules: {
        nodes: [
            {
                startTime: string;
                endTime: string;
                xMatchSetting: {
                    vsStages: [
                        {
                            name: string;
                            image: {
                                url: string;

                            }
                        },
                        {
                            name: string;
                            image: {
                                url: string;
                            }
                        }
                    ]
                    vsRule: {
                        name: string;
                    }
                }
            }
        ]
    }
    coopGroupingSchedule: {
        regularSchedules: {
            nodes: [
                {
                    startTime: string;
                    endTime: string;
                    setting: {
                        coopStage: {
                            name: string;
                            thumbnailImage: {
                                url: string;
                            }
                            image: {
                                url: string;
                            }
                        }
                        weapons: [
                            {
                                name: string;
                                image: {
                                    url: string;
                                }
                            },
                            {
                                name: string;
                                image: {
                                    url: string;
                                }
                            },
                            {
                                name: string;
                                image: {
                                    url: string;
                                }
                            },
                            {
                                name: string;
                                image: {
                                    url: string;
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
}