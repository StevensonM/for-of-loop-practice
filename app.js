// const subreddits = ['food', 'cats', 'sports', 'chess', 'apple', 'tech', 'scotch']

// for (let sub of subreddits) {
//     console.log(sub)
// }

//Here's a better example.

const seatingChart = [
    ['Eric', 'Tom', 'Megan'],
    ['Dave', 'Chase', 'Hank', 'John'],
    ['Sam', 'Roger', 'Fred', 'Cameron']
]

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}