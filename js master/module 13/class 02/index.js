const { log } = require('console')
const fs = require('fs')

/*
// Write a file

async function writeFileAsync(){
    try {
        await fs.writeFileSync('example.text', 'MERN B07')
        console.log('Successfully written')
    }
    catch(e) {
        console.error(e)
    }
} 
*/


/*
// File Read
async function readFileSync(){
    try{

       const data = await fs.readFileSync('example.text', 'utf-8')
        console.log(data)

    }

    catch(e) {
        console.error(e)
    }
} 
*/ 





/*
// File Rename

async function renameFileSync(){
    try{

       await fs.renameSync('example.text', 'new.text')
        console.log('Rename successfully.')

    }

    catch(e) {
        console.error(e)
    }
} 
*/ 




/*
// Update File Content - Re-write/Append
async function updateFileSync(){
    try{
        // Re-write
       // await fs.writeFileSync('new.text', 'Mern Stack Batch 07')
       
       // Append
        await fs.appendFileSync('new.text', 'Mern Stack Batch 07')
        console.log('Update successfully.')

    }

    catch(e) {
        console.error(e)
    }
}
*/ 


/*
// Delete
async function deleteFileSync(){

    try {

        await fs.unlinkSync('new.text')
        console.log('Deleted successfully')
    } catch (e) {

    }
}
*/ 


// Create a Folder

async function createFolderSync(){
    try {
        await fs.mkdirSync('new4');
        console.log('Created folder successfully')
    }
    catch(e){
        console.error(e)
    }
    

}

/*
// Delete a Folder

async function deleteFolderSync(){
    try {
        await fs.rmdirSync('new2');
        console.log('Delete folder successfully')
    }
    catch(e){
        console.error(e)
    }
}
*/







// Read a folder
async function readFolderSync(){
    try {
        const data =  await fs.readdirSync('new');
        console.log(data)
    }
    catch(e){
        console.error(e)
    }
}




// Rename a folder
async function renameFolderSync(){
    try {
        await fs.renameSync('new', 'latest');
        console.log(data)
    }
    catch(e){
        console.error(e)
    }
}


(async ()=>{
    await renameFolderSync()
})()


