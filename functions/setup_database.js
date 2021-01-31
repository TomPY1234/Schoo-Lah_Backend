const db = require('./api/database')

async function setupDatabase(req, res, next) {
    // To delete all the collections
    const collections = ['users', 'books', 'fees']
    collections.forEach(async (collection) => await deleteCollection(collection))

    // Add documents to the books collection
    addDocuments(
        'books',
        [
            {
                year: 1,
                title: 'Bahasa Melayu Tatabahasa Tahun 1',
                price: 20.00,
                image: 'assets/book_one.jpeg'
            },
            {
                year: 1,
                title: 'Bahasa Melayu Penulisan Tahun 1',
                price: 35.00,
                image: 'assets/book_two.jpeg'
            },
            {
                year: 2,
                title: 'English Year 2',
                price: 40.00,
                image: 'assets/book_three.jpeg'
            },
            {
                year: 2,
                title: 'Mathematics Year 2',
                price: 25.00,
                image: 'assets/book_four.jpeg'
            },
            {
                year: 3,
                title: 'Science Year 3',
                price: 25.00,
                image: 'assets/book_five.jpeg'
            },
            {
                year: 3,
                title: 'Mathematics Year 3',
                price: 35.00,
                image: 'assets/book_six.jpeg'
            },
            {
                year: 4,
                title: 'Bahasa Melayu Tatabahasa Tahun 4',
                price: 30.00,
                image: 'assets/book_seven.jpeg'
            },
            {
                year: 4,
                title: 'Bahasa Melayu Penulisan Tahun 4',
                price: 40.00,
                image: 'assets/book_eight.jpeg'
            },
            {
                year: 5,
                title: 'Bahasa Melayu Tatabahasa Tahun 5',
                price: 45.00,
                image: 'assets/book_one.jpeg'
            },
            {
                year: 5,
                title: 'English Year 5',
                price: 30.00,
                image: 'assets/book_four.jpeg'
            },
            {
                year: 6,
                title: 'Mathematics 6',
                price: 20.00,
                image: 'assets/book_three.jpeg'
            },
            {
                year: 6,
                title: 'Bahasa Melayu Penulisan Tahun 6',
                price: 40.00,
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
        ]
    )

    addDocuments(

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