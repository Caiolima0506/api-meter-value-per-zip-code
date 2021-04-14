import * as fs from "fs";
import { ConfigMongoDb } from '../domain/helpers/ConfigMongoDb';


export class JsonConfig  {

    /**
     * 
     * @returns {Promise<ConfigMongoDb>} dados para conexão no banco de dados
     */
    public async dbConfig(){

        const resultConfigMongoDb = new ConfigMongoDb();

        return new Promise<ConfigMongoDb>((resolve, reject)=>{

            this.readFile().then((jsonData:any)=>{
                
                resultConfigMongoDb.DB_URI = jsonData.dbConfig.DB_URI;
    
                resolve(resultConfigMongoDb);

            });

        })
    }

    /**
     * 
     * @returns Promessa do arquivo lido.
     */
    private async readFile(){

        return new Promise((resolve, reject)=>{

            try { 

                fs.readFile("appsettings.json" , "utf8", function(err, data){

                    if(err){
                        console.log(err)
                        return console.log("Erro ao ler arquivo");
                    }
                    
                    var jsonData = JSON.parse(data);

                    resolve(jsonData);
        
                });

            } catch (e) {

                console.log(e)
                console.log('[ERROR] Could not load "appsettings.json"');

                reject(e);
            }
        })



    }
}