import web
import MySQLdb as mysql
from datetime import date
import random

urls = (
    '/hollerday', 'HollerDay'
)

class HollerDay:
    def __init__(self):
        self.db = mysql.connect(user="guest",passwd="devel",db="hollerday")

    def GET(self):
        query = "SELECT name FROM holiday WHERE day = date(\'" + date.today().isoformat() + "\');"
        cursor = self.db.cursor()
        cursor.execute(query)
        holidays = cursor.fetchall()
        names = []
        for day in holidays:
            for name in day:
                names.append(name)
        today = "Nothing Day"
        if names:
            index = random.randint(0, len(names)-1)
            today = names[index]
        print names
        print today
        return "" + today


if __name__ == '__main__':
    app = web.application(urls, globals())
    app.run()