const numsArray = [7, 7, 7, 9, 45, 45, 45, 99];
const newNumsArray = [];
let seriaLength = 0;

for (let i = 0, j = 0; i < numsArray.length; i += seriaLength + 1, j++) {
    seriaLength = 0;
    for (let k = i + 1; k < numsArray.length; k++) {
        if (numsArray[i] === numsArray[k]) {
            seriaLength++;
        }
        else {

            break
        }

    }
    if (seriaLength > 0) {
        newNumsArray[j] = numsArray[i];
    }
    else {
        newNumsArray[j] = numsArray[i];
    }
}
console.log('Finalarray', newNumsArray);


update - browsers - versions.mjs

const tmp_file_dir_path = "./tmp";
const chrome_driver_file_path = `${tmp_file_dir_path}/chrome_driver_versions.xml`;
const chrome_driver_url = "https://chromedriver.storage.googleapis.com/";


await downloadFile(tmp_file_dir_path, chrome_driver_file_path, chrome_driver_url);

const chrome_driver_versions = await grabDataFromXml(chrome_driver_file_path).then(
    (data) => data.ListBucketResult.Contents
);
const last_chrome_driver_versions = await getLastChromeDriverVersions(chrome_driver_versions);


//   helpers

const downloadFile = async (dirPath, filePath, url) =>
    new Promise((resolve, reject) => {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true }); // Create temp directory if not exists
        }

        const file = fs.createWriteStream(filePath, { flags: "w" });

        const request = https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
            } else {
                file.close();
                fs.unlink(filePath, () => { }); // Delete temp file
                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
            }
        });

        request.on("error", (err) => {
            file.close();
            fs.unlink(filePath, () => { }); // Delete temp file
            reject(err.message);
        });

        file.on("finish", () => {
            console.log("Finish downloading chrome driver versions");
            resolve();
        });

        file.on("error", (err) => {
            file.close();

            if (err.code === "EEXIST") {
                reject("File already exists");
            } else {
                fs.unlink(filePath, () => { }); // Delete temp file
                reject(err.message);
            }
        });
    });

const grabDataFromXml = (filePath) =>
    new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    })
        .then((data) => parser.parse(data))
        .catch((err) => {
            console.error(err);
            return err;
        });