var convertedTime:any={};

// Used to get timezone of A User from IP Address.
const getIP = async () => {
  const ip = await (await fetch(`http://ip-api.com/json/`)).json();
  if(ip.status=='success')
  {
    convertedTime.status="success"
    convertedTime.timezone=ip.timezone
    return convertedTime.timezone
  } else{
    convertedTime.message = "Invalid Query, Try again !!."
    convertedTime.status= "fail"
  }
};


// Used to convertTime for timzone for a user.
export async function  GreetUser(){
  await getIP();
  const data = await (await fetch(`https://raw.githubusercontent.com/dmfilipenko/timezones.json/master/timezones.json`)).json();
  // Get the Data for which timezone matches.
  var filteredArray = data.filter(function(obj:any ) {
    return obj.utc.includes(convertedTime.timezone);
  });
  if(filteredArray.length>0)
  {
    var offset = filteredArray[0].offset

    var defaultDate = new Date();

    convertedTime.defaultDate=defaultDate.toLocaleString();

    var utc = defaultDate.getTime() + (defaultDate.getTimezoneOffset() * 60000);

    var newDate = new Date(utc + (3600000*offset));

    convertedTime.newDate = `${newDate.toLocaleString().substring(0,24)} ${filteredArray[0].text}`

    var greetings = await greetMessage(convertedTime.newDate);

    return  greetings
  }
  else{
    return 'Hello';
  }
}

const greetMessage = async (date:any) => {
    var d = new Date(date.substring(0,24));
    var n = d.getHours();
    if(n>=5 && n<12)
      return "Good Morning."
    if(n>=12 && n<17)
      return "Good Afternoon. ";
    else if (n>=17 && n<23)
      return "Good Evening. ";
    else if(n<5)
      return "Grab Some Coffee. ☕"

    return 'Hello'
};

