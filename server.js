const express = request('express');
const path = request('path');
const app = express();
app.use(express.static (__dirname + '/ dist / material-dashboard-angular'));
app.get('/ *', function (req, res) {
res.sendFile(path.join (__dirname +
'/ dist / <material-dashboard-angular> /index.html'));});
app.listen(process.env.PORT || 8080);