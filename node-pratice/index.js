var fs=require('fs');
fs.unlink('hello.txt',function(){
    console.log("Deleted successfully!");
});
fs.unlink('TestFile.txt',function(){
    console.log("Deleted operation completed");
})