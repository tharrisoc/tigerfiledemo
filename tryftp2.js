// Second attempt to use the jsftp module

const jsftp = require("jsftp");
const Ftp = new jsftp({
    host: 'ftp2.census.gov'
});

Ftp.auth('anonymous', 'anonyous', (err, data) => {
    if (err) { return console.log(err); }
    console.log(data);
    console.log("\n");

    Ftp.list("./geo/tiger/tiger2k/ak", (err, res) => {
        if (err) { return console.log(err); }
          console.log(res);
          process.exit(0);
    })
});

/*
C:\Users\Public\Documents\ShareRoot\TIGERdata\nodescripts\tigerfiledemo>node tryftp2.js
{ code: 230,
  text: '230-Server: ftp2.census.gov\n230-\n230-Personal Identifiable Information (PII) shall not be placed on the FTP\n230-server without prior special arrangement and in conjunction with ITSO.\n230-\n230-NOTE: The data available for anonymous FTP download on this FTP server are\n230-also available over the Web:\n230-http://www2.census.gov\n230 Login successful.',
  isMark: false,
  isError: false }

-rw-rw-r--    1 844      i-geo       20196 Oct 11  2001 counts02.txt
-rw-rw-r--    1 844      i-geo      353963 Oct 11  2001 tgr02013.zip
-rw-rw-r--    1 844      i-geo      445672 Oct 11  2001 tgr02016.zip
-rw-rw-r--    1 844      i-geo     1542463 Oct 11  2001 tgr02020.zip
-rw-rw-r--    1 844      i-geo     1428434 Oct 11  2001 tgr02050.zip
-rw-rw-r--    1 844      i-geo      129673 Oct 11  2001 tgr02060.zip
-rw-rw-r--    1 844      i-geo      273568 Oct 11  2001 tgr02068.zip
-rw-rw-r--    1 844      i-geo      501496 Oct 11  2001 tgr02070.zip
-rw-rw-r--    1 844      i-geo     1651817 Oct 11  2001 tgr02090.zip
-rw-rw-r--    1 844      i-geo      162505 Oct 11  2001 tgr02100.zip
-rw-rw-r--    1 844      i-geo      445354 Oct 11  2001 tgr02110.zip
-rw-rw-r--    1 844      i-geo     1920536 Oct 11  2001 tgr02122.zip
-rw-rw-r--    1 844      i-geo      483001 Oct 11  2001 tgr02130.zip
-rw-rw-r--    1 844      i-geo      518246 Oct 11  2001 tgr02150.zip
-rw-rw-r--    1 844      i-geo      573940 Oct 11  2001 tgr02164.zip
-rw-rw-r--    1 844      i-geo     2174940 Oct 11  2001 tgr02170.zip
-rw-rw-r--    1 844      i-geo      969966 Oct 11  2001 tgr02180.zip
-rw-rw-r--    1 844      i-geo     1344784 Oct 11  2001 tgr02185.zip
-rw-rw-r--    1 844      i-geo      736497 Oct 11  2001 tgr02188.zip
-rw-rw-r--    1 844      i-geo      753626 Oct 11  2001 tgr02201.zip
-rw-rw-r--    1 844      i-geo      283988 Oct 11  2001 tgr02220.zip
-rw-rw-r--    1 844      i-geo      482206 Oct 11  2001 tgr02232.zip
-rw-rw-r--    1 844      i-geo      749287 Oct 11  2001 tgr02240.zip
-rw-rw-r--    1 844      i-geo     1307031 Oct 11  2001 tgr02261.zip
-rw-rw-r--    1 844      i-geo      621650 Oct 11  2001 tgr02270.zip
-rw-rw-r--    1 844      i-geo      431616 Oct 11  2001 tgr02280.zip
-rw-rw-r--    1 844      i-geo      281707 Oct 11  2001 tgr02282.zip
-rw-rw-r--    1 844      i-geo     3013009 Oct 11  2001 tgr02290.zip

C:\Users\Public\Documents\ShareRoot\TIGERdata\nodescripts\tigerfiledemo>

 */
