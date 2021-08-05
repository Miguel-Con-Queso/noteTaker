const fs = require('fs');

module.exports = app => {

    fs.readFile('db/db.json', 'utf8', (err, data) => {
    
        // error handling
        if (err) throw err;

        var notes = JSON.parse(data);

        // api routes
        app.get('/api/notes', function(request, response) {

            response.json(notes);
        });

        app.get('api/notes/:id', function(request, response) {

            response.json(notes[request.params.id]);
        });

        app.post('/api/notes', function(request, response) {

            let newNote = request.body;
            notes.push(newNote);
            updateDb();
            return console.log(newNote.title + ' added to notes list');
        });

        app.delete('/api/notes/:id', function(request, response) {
            notes.splice(request.params.id, 1);
            updateDb();
            console.log(request.params.id + ' deleted');
        });

        // view routes
        app.get('/notes', function(request, response) {
            response.sendFile(path.join(__dirname, '../../public/notes.html'));
        });

        app.get('*', function(request, response) {
            response.sendFile(path.join(__dirname, '../../public/index.html'));
        });

        function updateDb() {
            fs.writeFile('db/db.json', JSON.stringify(notes), err => {
                if (err) throw err;
                return true;
            });
        }
    });
};