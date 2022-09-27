export default {
    fileSystem: {
        path: './DB'
    },
    mongodb: {
        cnxStr: 'mongodb+srv://PatricioVeliz32065:UJSDX1og17OeCl4A@cluster0.x4mqe7h.mongodb.net/?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            serverSelectionTimeoutMS: 5000,
        }
    },
    firebase: {
        "type": "service_account",
        "project_id": "apcoderhouse32065-89cba",
        "private_key_id": "b35906a36e970d2f67440ef08bc19c2db6cf1063",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC+IulQLmW/ZEXQ\nXXoPq6PO+ScNqycMm9kvuIGKkB461HL0xmP3yk4IicEO+EpAnL4gfw+THwJfbrrD\nQTf+4u7vVUWNmPY2kV0VJfjrPsKIR1/d5M236nemaOPUho1+dMiDLSwbAedteSB5\nAFHhcZ+qQw9kU4dGXK6zd65LQeVG+o8Qs+0Mytab4o8jF+XpGaVtp2N8ABbtUCXK\nSi4uEsSgIxmbJst3AIGlw0WWUmit4QVN1FsJFJwsA3vfepd3IkGnpXwQNcOZljYv\nkTWQxGlBmeMe70wEVGtLx1vRcd2Bk1pVEVst2cOEMy7B1wxYw568OaaSaytKoStg\nkR1Nm3RfAgMBAAECggEACizNxePdv7rK06Y/oyQLzZvev6gCRyCgpExK6RKM/kKi\nmOp0V20vn4cDr7HmLgQAAWGGAK5e+aLFgtp0IoNGxxm4nFBsaKopzDkZKORVvmZC\nFpqpJFJQrzVGGqL4DSWMb3H/k2hsLUXB+50NRLPIbXD48LpZmbsvAYgCP0vE9yHX\nhf3kqzIovJangoUyA4VmgrILtrknnPhSHNMW6npNxmWw+7nBFzR6m8ZRpbWrbTsL\nnuEVlfBsvpl3r7D3jpAKscr71GDSaO6wagpmaQbucSCtCmNVz4mpw/q/pKH+x9r0\nt1eyDg+EPbhLrdJMROYWBwUE0/proxjTPwNrzJWO7QKBgQDmLopq8+tuhbZSdNCU\nBlVOfndbkPWc7ifTJzGolj3qu/IcZStmCLOfZr+IhwNPZxzrPISXlTI8e/q5U9ds\nAA2oPiY5CRMyO+e7y70oqw+8hz/z5AcBIRXv+3jGKzRU0JVOoFmwDHcjOG04sgnV\n924fuAerapcVqnPKTKs9MgzCSwKBgQDTdoDClI91m9siWpncWcO9vQ+2sX7HdTqp\nlgDIDHV3gYTXyJJom+qG0MmnVHvMF9uORDWiaMa+mgLgEmV1yE2A0C+RhJyduEJW\nYBIP1aJqna4941MLA/vHs/p5ncyuKPnqmANev5r6t7D7ox26zNoFY7dEFp7Qsb9B\ne75A8fYpvQKBgQC8ANddc8yfgObhgje6L1INwo2KZGO3wW0VsbWFlPENgGTHfHpt\n5D2RvEJEKMIzYGzmVY+Wn21gqYKnTCtvMrv05o4hl5/uL6+eW1IsnUtFGNLLSTvP\nWE6qrCKA+VjMzXClv6KBgCzuv2+2FvShpm5zycO55l1wfMAGQ4i5et+g8QKBgQCx\n7BVuot0KEbcRcrXep1CBBuB/0VxgqoxPQD0sFP+JK9sATGyTxAxSnr3tIrJ/CNvd\nGhseqZX/rUoaCqB/t6cuaPx9Ld0w/2Yhkvffhtr/ZejDfc/ThuiEITTwuwsKxsNw\n1bKQOBtINOKe96H+GHqg6kO68GV0JvpLOLjdoDiE6QKBgQCE9Vvi2IZuaUKWgk2d\nuJ4R9DKBT7tG4xwqkK3lGYCN9XDiMjkRSwyvZ3wkhbL2VHWfJD/XsrbThieQiuxw\nFo5OSRUola1JX8+/NgQcpDAWN68aYZP/er2v8a5AhFfsR12F7TeJHRwDqipqGMX+\n4OIFaINxDHPBQUf8XLDxhBDYRg==\n-----END PRIVATE KEY-----\n",
        "client_email": "firebase-adminsdk-tdhrz@apcoderhouse32065-89cba.iam.gserviceaccount.com",
        "client_id": "105448080121243145040",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-tdhrz%40apcoderhouse32065-89cba.iam.gserviceaccount.com"
      },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'coderhouse'
        }
    }
}