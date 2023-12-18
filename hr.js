
        new Vue({
            el: '#app',
            data: {
                hospitals: []
            },
            created() {
                this.getHospitals();
            },
            methods: {
                getHospitals() {
                    // Simulate an API call to get hospitals
                    this.hospitals = [
                        {
                            name: 'Apollo Hospital',
                            doctors: [
                                { name: 'Dr. Pavani', id: 1 },
                                { name: 'Dr. Bharat', id: 2 },
                            ]
                        },
                        {
                            name: 'CARE Hospital',
                            doctors: [
                                { name: 'Dr. Karthik', id: 3 },
                                { name: 'Dr. Shivani', id: 4 },
                            ]
                        },
                        {
                            name: 'Yashoda',
                            doctors: [
                                { name: 'Dr. Prasanth', id: 5 },
                                { name: 'Dr. Shivanandh', id: 6 },
                            ]
                        },
                        {
                            name: 'Continental Hospital',
                            doctors: [
                                { name: 'Dr. Somwya', id: 7 },
                                { name: 'Dr. Jayanth', id: 8 },
                            ]
                        },
                        {
                            name: 'Medicover Hospital',
                            doctors: [
                                { name: 'Dr. Arjun', id: 9 },
                                { name: 'Dr. Sai', id: 10 },
                            ]
                        },
                        {
                            name: 'Max cure',
                            doctors: [
                                { name: 'Dr. Nagamani', id: 11 },
                                { name: 'Dr. Ramulu', id: 12 },
                            ]
                        },

                    ];
                },
                getDoctorSchedule(doctor) {
                    // Simulate an API call to get doctor schedule
                    let schedule = [
                        { date: '2022-03-01', startTime: '10:00', endTime: '11:00' },
                        { date: '2022-03-02', startTime: '14:00', endTime: '15:00' },
                        // Add more schedules as needed
                    ];

                    // Display the doctor schedule
                    alert(`Doctor Schedule for ${doctor.name}:\n\n` + schedule.map(appt => `${appt.date} ${appt.startTime} - ${appt.endTime}`).join('\n'));
                }
            }
        });