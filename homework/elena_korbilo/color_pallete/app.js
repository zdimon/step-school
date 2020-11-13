function isCodeValid(){
  var type = $('#type').val();
  var code = $('#code').val();

  let rgb_reg = /^(\d{1,2}|[1][0-9][0-9]|[2][0-5][0-5]),(\d{1,2}|[1][0-9][0-9]|[2][0-5][0-5]),(\d{1,2}|[1][0-9][0-9]|[2][0-5][0-5])$/;
  let rgba_reg = /^(?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*$/;
  let hex_reg = /#[A-Fa-f0-9]{6}\b/gi;

  if(type == "RGB"){
    if(code.match(rgb_reg) == null){
      console.log('error');
      console.log(code.match(rgb_reg));
      $('#error_code').text('RGB code must match the pattern [0-255], [0-255], [0-255]');
      return true;
    }
    else{
      $('#error_code').text('');
      return false;
    }
  } else if(type == "RGBA"){
    if(code.match(rgba_reg) == null){
      console.log('error');
      console.log(code.match(rgba_reg));
      $('#error_code').text('RGBA code must match the pattern [0-255], [0-255], [0-255], [0-1]');
      return true;
    } else{
      $('#error_code').text('');
      return false;
    }
  } else if(type == "HEX"){
    if(code.match(hex_reg) == null){
      console.log('error');
      $('#error_code').text('HEX code must match the pattern #[A-Fa-f0-9]{6}');
      return true;
    } else{
      $('#error_code').text('');
      return false;
    }
  }
}

function isColorValid(){
  var color = $('#color').val();

  if(color.match(/[a-zA-Z]/) == null){
    console.log('error');
    $('#error_color').text('Color can only contain letters');
    return true;
  } else {
    $('#error_color').text('');
    return false;
  }
}

var num = 0;

function appendColor(){
  num++;
  var color = $('#color').val();
  var type = $('#type').val();
  var code = $('#code').val();
  console.log(color, type, code);

  $('#container').append($(`<div id="box${num}"><div id="small_box">${color}<br><br>${type}<br><br><b>${code}</b></div></div>`));

  let div = document.getElementById(`box${num}`);

  if(type == 'HEX')
    div.style.cssText = `width: 200px; height: 130px; background-color: ${code}; padding-top: 15px; margin-left: 20px; margin-top: 20px;`;
  else
    div.style.cssText = `width: 200px;  height: 130px; background-color: ${type}(${code}); padding-top: 15px; margin-left: 20px; margin-top: 20px;`;
}

$('#button').on('click', function(){
  console.log(color, type, code);
  if(isCodeValid && isColorValid){
    appendColor();
  }
  
})