import { exec } from 'child_process';


function getProgID(){
    exec('reg query "HKCU\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice" /v ProgId', (error, stdout, stderr) => {
        if (error) {
            console.error(`Execution Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        const match = stdout.match(/ProgId\s+REG_SZ\s+(.+)/);
        if (match) {
            console.log(`ProgId: ${match[1]}`);
            return match[1]
        } else {
            console.log('can not found ProgID');
        }
    });
}


module.exports = {
    getProgID,
};