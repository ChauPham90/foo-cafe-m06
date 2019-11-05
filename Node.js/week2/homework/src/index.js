'use strict';

// TODO: Write the homework code in this file
const fs = require('fs');
const lineReader = require('line-reader');
const keyWord = process.argv[2];
let item = process.argv[3];

if (keyWord == 'help') {
    fs.readFile(__dirname + "/" + "help.json", 'utf8', function(err, data) {
        data = JSON.parse(data);
        if (err) { console.log(err) }
        console.log(data);
    })
} else if (keyWord == 'list') {
    lineReader.eachLine('list.txt', function(line) {
        console.log(JSON.parse(line).name)
    });
} else if (keyWord == 'add') {
    if (item == null) {
        console.error('You should add something')
    } else {
        let item = process.argv[3];
        const todoJson = { "name": item };
        fs.appendFile('list.txt', JSON.stringify(todoJson) + "\n", function(err) {
            if (err)
                return console.log(err);
            console.log('Added %s', item, 'to the list!');
        });
    }

} else if (keyWord == 'reset') {
    fs.unlink('list.txt', function(err) {
        if (err)
            return console.log('file has alredy deleted');
    })
} else if (keyWord == 'remove') {
    let count = 0;
    let deleteItem = false;
    let baseIndex = process.argv[3];
    lineReader.eachLine('list.txt', function(line, last) {
        count++;
        if (baseIndex == null) {
            console.log('there is no item')
        } else if (count != baseIndex) {
            fs.appendFile('new.txt', line + "\n", function(err) {
                if (err)
                    return console.log(err);
            });
        } else {
            deleteItem = true;
        }
        if (last) {
            if (deleteItem) {
                fs.unlink('list.txt', function(err) {
                    if (err)
                        return console.log('file has alredy deleted');
                })
                fs.rename('new.txt', 'list.txt', function(err) {
                    if (err) throw err;
                    console.log('remove %s!', baseIndex);
                });
            } else {
                fs.unlink('new.txt', function(err) {
                    if (err)
                        return console.log('file has alredy deleted');
                })
                console.log('there is no such item.')
            }
        }
    });

}