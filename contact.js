
<script>
// import fs module in which writeFile function is defined.
const fsLibrary  = require('fs')
  
// Data which will need to add in a file.
let data = "Hello world."
  
// Write data in 'newfile.txt' .
fsLibrary.writeFile('newfile.txt', data, (error) => {
      
    // In case of a error throw err exception.
    if (error) throw err;
})
</script>


