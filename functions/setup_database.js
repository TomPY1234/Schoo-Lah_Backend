const db = require('./api/database')

async function setupDatabase(req, res, next) {
    // To delete all the collections
    const collections = ['users', 'books', 'fees', 'todos']
    collections.forEach(async (collection) => await deleteCollection(collection))

    // Add documents to the books collection
    addDocuments(
        'books',
        [
            {
                year: 1,
                title: 'Bahasa Melayu Tatabahasa Tahun 1',
                price: 20,
                image: 'assets/book_one.jpeg'
            },
            {
                year: 1,
                title: 'Bahasa Melayu Penulisan Tahun 1',
                price: 35,
                image: 'assets/book_two.jpeg'
            },
            {
                year: 2,
                title: 'English Year 2',
                price: 40,
                image: 'assets/book_three.jpeg'
            },
            {
                year: 2,
                title: 'Mathematics Year 2',
                price: 25,
                image: 'assets/book_four.jpeg'
            },
            {
                year: 3,
                title: 'Science Year 3',
                price: 25,
                image: 'assets/book_five.jpeg'
            },
            {
                year: 3,
                title: 'Mathematics Year 3',
                price: 35,
                image: 'assets/book_six.jpeg'
            },
            {
                year: 4,
                title: 'Bahasa Melayu Tatabahasa Tahun 4',
                price: 30,
                image: 'assets/book_seven.jpeg'
            },
            {
                year: 4,
                title: 'Bahasa Melayu Penulisan Tahun 4',
                price: 40,
                image: 'assets/book_eight.jpeg'
            },
            {
                year: 5,
                title: 'Bahasa Melayu Tatabahasa Tahun 5',
                price: 45,
                image: 'assets/book_one.jpeg'
            },
            {
                year: 5,
                title: 'English Year 5',
                price: 30,
                image: 'assets/book_four.jpeg'
            },
            {
                year: 6,
                title: 'Mathematics 6',
                price: 20,
                image: 'assets/book_three.jpeg'
            },
            {
                year: 6,
                title: 'Bahasa Melayu Penulisan Tahun 6',
                price: 40,
                image: 'assets/book_five.jpeg'
            }
        ],
        'fees',
        [
            {
                monthFee: 'January',
                date: '1/1/2021',
                amount: "100.00",
                feeStatus: 'PAID'
            },
            {
                monthFee: 'Books x 5',
                date: '1/1/2021',
                amount: "60.00",
                feeStatus: 'PAID'
            },
            {
                monthFee: 'February',
                date: '13/2/2021',
                amount: "100.00",
                feeStatus: 'PAID'
            },
            {
                monthFee: 'March',
                date: '15/3/2021',
                amount: "100.00",
                feeStatus: 'PAID'
            },
            {
                monthFee: 'April',
                date: '22/4/2021',
                amount: "100.00",
                feeStatus: 'PAID'
            },
            {
                monthFee: 'May',
                date: '13/5/2021',
                amount: "100.00",
                feeStatus: 'UNPAID'
            }
        ],
        'users',
        [
            {
                username: 'ahmadaiman',
                password: 'ahmad123',
                name: 'Ahmad Aiman',
                type: 'student',
                year: 5,
                school: 'SK Impian Emas',
                phone: '0197542776',
                email: 'ahmad.aiman@gmail.com'
            },
            {
                username: 'nurain',
                password: 'ain123',
                name: 'Nur Ain',
                type: 'teacher',
                year: 0,
                phone: '0175875565',
                email: 'ainn765@gmail.com'
            }
        ],
        'todos',
        [
            {
                title: "Mathematics",
                items: [
                    {
                        title: "Quiz 1: Addition & Substraction",
                        completed: true
                    },
                    {
                        title: "Exercise multiplication",
                        completed: false
                    },
                    {
                        title: "Homework: Let's learn about money",
                        completed: true
                    },
                    {
                        title: "Test 1: Calculation of money",
                        completed: false
                    },
                    {
                        title: "Quiz 2: Fraction",
                        completed: false
                    }

                ]
            },
            {
                title: "Science",
                items: [
                    {
                        title: "Exercise 1: Human Body",
                        completed: true
                    },
                    {
                        title: "Basic needs of human and plants",
                        completed: false
                    },
                    {
                        title: "Homework: Food Chain",
                        completed: true
                    }

                ]
            },
            {
                title: "Bahasa Malaysia",
                items: [
                    {
                        title: "Mari Membaca",
                        completed: true
                    },
                    {
                        title: "Karangan: Aku Sebatang Pensel",
                        completed: false
                    },
                    {
                        title: "Pemahaman tatabahasa",
                        completed: true
                    },
                    {
                        title: "Karangan: Keluarga saya",
                        completed: false
                    }

                ]
            }
        ]
    )
    res.send('Setting Up Database.... Done ')
}

async function deleteCollection(collection) {
    const cref = db.firestore.collection(collection)
    const docs = await cref.listDocuments()
    docs.forEach((doc) => doc.delete())
}

function addDocuments(collection, docs) {
    docs.forEach((doc) => db.create(collection, doc))
}

module.exports = setupDatabase