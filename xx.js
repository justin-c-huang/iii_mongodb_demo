db.transactions.insert(
    { _id: 1, 
    source: "A", 
    destination: "B", 
    value: 100, 
    state: "initial", 
    lastModified: new Date() }
)