interface regularSchedules {
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