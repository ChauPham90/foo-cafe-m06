const mysql = require('mysql2');
const express = require('express');
const prompt = require('prompt');
const app = express()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'new_world',
});

var prompt_attributes = [{
        name: 'country',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'Username is not valid, it can only contains letters, spaces, or dashes'
    },
    {
        name: 'region'
    },
    {
        name: 'language'
    },
    {
        name: 'officialLanguage'
    }
];
prompt.start();
prompt.get(prompt_attributes, function showCapital(err, result) {
    if (err) {
        console.log(err);
        return -1;
    } else {
        let data = result.country;
        let region = result.region;
        let language = result.language;
        let officialLanguage = result.officialLanguage;

        if (data != null) {
            connection.execute(
                'SELECT capital FROM country WHERE`name` = ? ', [data],
                function showCapital(err, results) {
                    if (err) {
                        console.log(err);
                        return -1;
                    } else {
                        console.log(`the capital code is`, results);
                    }
                }
            )
        };

        if (region != null) {
            connection.execute(
                'SELECT countrylanguage.language  FROM countrylanguage    INNER JOIN    country  ON countrylanguage.countrycode = country.code and countrylanguage.IsOfficial ="T"  where country.region = ?', [region],
                function showCapital(err, results, fields) {
                    if (err) {
                        console.log(err);
                        return -1;
                    } else {
                        console.log(`the languages spoken in the region are :`, results);
                    }

                }
            )
        }

        if (language != null) {
            connection.execute(
                ' SELECT city.name from city inner join countrylanguage on countrylanguage.countrycode = city.countrycode where countrylanguage.language = ?', [language],
                function showCapital(err, results) {
                    if (err) {
                        console.log(err);
                        return -1;
                    } else {
                        console.log(`cities speak the language are`, results);
                    }
                }
            )
        }

        if (officialLanguage != null) {
            connection.execute(
                " SELECT name FROM country WHERE code IN  (SELECT countrycode FROM countryLanguage WHERE IsOfficial = 't' AND language = ?)", [officialLanguage],
                function showCapital(err, results) {
                    console.log(`length of result is ${results.length}`)
                    if (err) {
                        console.log(err);
                        return -1;
                    } else if (results.length = 1) {
                        return console.log(true);
                    } else if (results.length < 1) {
                        return console.log(false)
                    } else {
                        console.log(`cities speak the language are`, results);
                    }
                }
            )
        } else {
            console.log('please write input');
        }
    }
});
app.listen('3000', () => {
    // console.log('Server started on port 3300');
});