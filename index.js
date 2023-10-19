
const form = document.querySelector('#searchBox');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    console.log(form.elements.query.value)
    const city = form.elements.query.value;
    form.elements.query.value = '';
    
    async function location(){
    const res =  await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
     long = res.data.results[0].longitude ;
     lat = res.data.results[0].latitude;
     console.log(lat,long);
 
     const res1 =  await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true`);
    const w1 = Object.values(res1);
    console.log(w1)
    
 
    const infos = Math.round(w1[0].current_weather.temperature);
    const temp = document.querySelector("h1").innerHTML = (`${infos}°C`);
    console.log(temp);
    const loc1 = res.data.results[0].name;
    console.log(loc1)
    const loc2 = document.querySelector("h2").innerHTML = loc1;

     const nightOrDay = w1[0].current_weather.is_day;
     const wheatherCode = w1[0].current_weather.weathercode;
     console.log(wheatherCode)


    //  night 
     if(nightOrDay == 0  ){
          
        document.body.removeAttribute('class');
        document.body.classList.add('night');

        const temp1 = document.querySelector("h1");
        temp1.removeAttribute('class');
        temp1.classList.add('tempnight');

        const loc3 = document.querySelector("h2");
        loc3.removeAttribute('class');
        loc3.classList.add('locationnight');
        //clear sky
        if(wheatherCode == 0,1){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork_2.png')
           } else if(wheatherCode == 2){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/semicloudy.png')
           }else if(wheatherCode == 3){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src' ,'/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/cloudy.png')
           }else if(wheatherCode == 51,53,55,61,63,65,80, 81, 82){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute( 'src', '/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/raining.png')
           } else if(wheatherCode == 56, 57,66, 67 ,71, 73, 75,77,85, 86){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/snowing.png')
           }else if(wheatherCode == 95,96,99){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/thunderstorm.png')
           } else if(wheatherCode == 45,48){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork_2.png')
           } else {
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork_2.png')
           }
        
        

       
        const but = document.querySelector('button')
        but.setAttribute('class','but')

        const inpt = document.querySelector('input')
        inpt.removeAttribute('class')
        inpt.setAttribute('class','searchCityNight')
        

    }
    //day
    else if(nightOrDay == 1 ){
        document.body.removeAttribute('class')
        document.body.classList.add('sunny')

        const temp1 = document.querySelector("h1")
        temp1.removeAttribute('class')
        temp1.classList.add('temp')

        const loc3 = document.querySelector("h2")
        loc3.removeAttribute('class')
        loc3.classList.add('location')
          if(wheatherCode == 0,1){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork.png')
          }else if(wheatherCode == 2){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/semycloudyday.png')
           }else if(wheatherCode == 3){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src' ,'/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/cloudy.png')
           }else if(wheatherCode == 51,53,55,61,63,65,80, 81, 82){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute( 'src', '/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/raining.png')
           } else if(wheatherCode == 56, 57,66, 67 ,71, 73, 75,77,85, 86){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/snowing.png')
           }else if(wheatherCode == 95,96,99){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/thunderstorm.png')
           }else if(wheatherCode == 45,48){
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork.png')
           } else {
            const icon = document.querySelector('#sun');
            icon.removeAttribute('src')
            icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork.png')
           } 
        
           
        const but = document.querySelector('button')
        but.removeAttribute('class')

        const inpt = document.querySelector('input')
        inpt.removeAttribute('class')
        inpt.setAttribute('class','searchCity')
    }
    
    
}

location();



})

//this is for first time entering the page


    const successCallback = (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        async function location(){
            
             console.log(lat,long);
             
             const res1 =  await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true`);
            const w1 = Object.values(res1);
            console.log(w1)
            const location = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=1128c1e54dd848beb7cca343928cc32a`)
            const infos = Math.round(w1[0].current_weather.temperature);
            const temp = document.querySelector("h1").innerHTML = (`${infos}°C`);
            console.log(temp);
            const loc1 = location.data.results[0].county;
            console.log(loc1)
            const loc2 = document.querySelector("h2").innerHTML = loc1;
        
             const nightOrDay = w1[0].current_weather.is_day;
             const wheatherCode = w1[0].current_weather.weathercode;
             console.log(wheatherCode)
        
        
            //  night 
             if(nightOrDay == 0 ){
                  
                document.body.removeAttribute('class');
                document.body.classList.add('night');
        
                const temp1 = document.querySelector("h1");
                temp1.removeAttribute('class');
                temp1.classList.add('tempnight');
        
                const loc3 = document.querySelector("h2");
                loc3.removeAttribute('class');
                loc3.classList.add('locationnight');
                //clear sky
                if(wheatherCode == 0,1){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork_2.png')
                 } else if(wheatherCode == 2){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/semicloudy.png')
                 }else if(wheatherCode == 3){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src' ,'/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/cloudy.png')
                 }else if(wheatherCode == 51,53,55,61,63,65,80, 81, 82){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute( 'src', '/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/raining.png')
                 } else if(wheatherCode == 56, 57,66, 67 ,71, 73, 75,77,85, 86){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/snowing.png')
                 }else if(wheatherCode == 95,96,99){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/thunderstorm.png')
                 } else if(wheatherCode == 45,48){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork_2.png')
                 } else {
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork_2.png')
                 }
              
              
      
             
              const but = document.querySelector('button')
              but.setAttribute('class','but')
      
              const inpt = document.querySelector('input')
              inpt.removeAttribute('class')
              inpt.setAttribute('class','searchCityNight')
              
      
          }
          //day
          else if(nightOrDay == 1 ){
              document.body.removeAttribute('class')
              document.body.classList.add('sunny')
      
              const temp1 = document.querySelector("h1")
              temp1.removeAttribute('class')
              temp1.classList.add('temp')
      
              const loc3 = document.querySelector("h2")
              loc3.removeAttribute('class')
              loc3.classList.add('location')
                if(wheatherCode == 0,1){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork.png')
                }else if(wheatherCode == 2){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/semycloudyday.png')
                 }else if(wheatherCode == 3){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src' ,'/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/cloudy.png')
                 }else if(wheatherCode == 51,53,55,61,63,65,80, 81, 82){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute( 'src', '/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/raining.png')
                 } else if(wheatherCode == 56, 57,66, 67 ,71, 73, 75,77,85, 86){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/snowing.png')
                 }else if(wheatherCode == 95,96,99){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/thunderstorm.png')
                 }else if(wheatherCode == 45,48){
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork.png')
                 } else {
                  const icon = document.querySelector('#sun');
                  icon.removeAttribute('src')
                  icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork.png')
                 } 
                
                   
                const but = document.querySelector('button')
                but.removeAttribute('class')
        
                const inpt = document.querySelector('input')
                inpt.removeAttribute('class')
                inpt.setAttribute('class','searchCity')
            }
            
            
        }
        location();
      };

      


      const errorCallback = (error) => {
            const citys = ['Tokyo','Berlin','Budapest','New York','Paris'];
    let x = Math.floor((Math.random()*5) );
     const city3 = citys[x];
        async function location(){
        const res =  await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city3}&count=1&language=en&format=json`);
         long = res.data.results[0].longitude ;
         lat = res.data.results[0].latitude;
         console.log(lat,long);
     
         const res1 =  await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&current_weather=true`);
        const w1 = Object.values(res1);
        console.log(w1)
        
     
        const infos = Math.round(w1[0].current_weather.temperature);
        const temp = document.querySelector("h1").innerHTML = (`${infos}°C`);
        console.log(temp);
        const loc1 = res.data.results[0].name;
        console.log(loc1)
        const loc2 = document.querySelector("h2").innerHTML = loc1;
    
         const nightOrDay = w1[0].current_weather.is_day;
         const wheatherCode = w1[0].current_weather.weathercode;
         console.log(wheatherCode)
    
    
        //  night 
         if(nightOrDay == 0 ){
              
            document.body.removeAttribute('class');
            document.body.classList.add('night');
    
            const temp1 = document.querySelector("h1");
            temp1.removeAttribute('class');
            temp1.classList.add('tempnight');
    
            const loc3 = document.querySelector("h2");
            loc3.removeAttribute('class');
            loc3.classList.add('locationnight');
            //clear sky
            if(wheatherCode == 0,1){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork_2.png')
             } else if(wheatherCode == 2){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/semicloudy.png')
             }else if(wheatherCode == 3){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src' ,'/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/cloudy.png')
             }else if(wheatherCode == 51,53,55,61,63,65,80, 81, 82){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute( 'src', '/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/raining.png')
             } else if(wheatherCode == 56, 57,66, 67 ,71, 73, 75,77,85, 86){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/snowing.png')
             }else if(wheatherCode == 95,96,99){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/thunderstorm.png')
             } else if(wheatherCode == 45,48){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork_2.png')
             } else {
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork_2.png')
             }
          
          
  
         
          const but = document.querySelector('button')
          but.setAttribute('class','but')
  
          const inpt = document.querySelector('input')
          inpt.removeAttribute('class')
          inpt.setAttribute('class','searchCityNight')
          
  
      }
      //day
      else if(nightOrDay == 1 ){
          document.body.removeAttribute('class')
          document.body.classList.add('sunny')
  
          const temp1 = document.querySelector("h1")
          temp1.removeAttribute('class')
          temp1.classList.add('temp')
  
          const loc3 = document.querySelector("h2")
          loc3.removeAttribute('class')
          loc3.classList.add('location')
            if(wheatherCode == 0,1){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork.png')
            }else if(wheatherCode == 2){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/semycloudyday.png')
             }else if(wheatherCode == 3){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src' ,'/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/cloudy.png')
             }else if(wheatherCode == 51,53,55,61,63,65,80, 81, 82){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute( 'src', '/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/raining.png')
             } else if(wheatherCode == 56, 57,66, 67 ,71, 73, 75,77,85, 86){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/snowing.png')
             }else if(wheatherCode == 95,96,99){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/thunderstorm.png')
             }else if(wheatherCode == 45,48){
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork.png')
             } else {
              const icon = document.querySelector('#sun');
              icon.removeAttribute('src')
              icon.setAttribute('src','/Users/elonmusk/Library/CloudStorage/OneDrive-Personal/programing/proiecte/wheather api/Untitled_Artwork.png')
             } 
            
               
            const but = document.querySelector('button')
            but.removeAttribute('class')
    
            const inpt = document.querySelector('input')
            inpt.removeAttribute('class')
            inpt.setAttribute('class','searchCity')
        }
        
    }
    location();
     
      };
      
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
      
     



