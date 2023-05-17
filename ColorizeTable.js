function colorize() {
    const rows = Array.from(document.getElementsByTagName('tr'));
    const button = document.querySelector('button');
    let evenRows = []

    for (i = 0; i < rows.length; i++) {
        if (i % 2 !== 0) {
            evenRows.push(rows[i])
        }
    }

    for (const tr of evenRows) {
        tr.style.backgroundColor = 'teal';
    }
}
