const app = Vue.createApp({	})
	app.component('app-retrievejson', {
		data: function(){
			return  {err:'',msg:''} 
		},  
		template: `	
        <h1>Units</h1>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Code</th>
              <th>Description</th>
              <th>CP</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in msg">
              <td>{{ m.code }}</td>
              <td>{{ m.desc }}</td>
              <td>{{ m.cp }}</td>
              <td>{{ m.type }}</td>
            </tr>
          </tbody>
        </table>
        `,
		mounted() { //Called after the instance has been mounted
			var self = this;
			var url = 'units.json';

			fetch(url)     //javascript fetch api  
			.then( response =>{
			  //turning the response into the usable data
			  return response.json( );
			})
			.then( data =>{
			  //This is the data you wanted to get from url
			  self.msg=data;
			})
			.catch(error => {
			  self.err=error
			});
  		}
    })

app.mount('#app')