/***************************************/
//1

function filter(arr) 
{
    console.log(arr);
    
    fn = function() 
    {
        const first = document.getElementById('Yes')
        const second = document.getElementById('No')

        first.addEventListener('click', function(test) 
        {
            test = true;
            if (test == true)
            {
                arr.pop();
                console.log(arr);
            }
        })

        second.addEventListener('click', function(test) 
        {
            test = false;
        })
    }
}
filter([1, 23, 4, 6, 55, 234]);
fn();

/***************************************/
//2
o_camera = function() {
    const camera = document.getElementById('camera')
    
    camera.addEventListener('click', function() 
    {
        const tpl = `
            <br>
            <video width = "200" height="100" autoplay = "true" src="2.mp4" controls="controls" id = "videoElement"></video>`;

        $('#con').append(tpl);
    })
}

o_camera();





