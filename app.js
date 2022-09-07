const nSquared= [0, 1, 4, 9,16,25,36,49,64,81,100,121,144,169,196, 225]
const nlogn=[0,0,2,4.75,8, 11.609, 15.509, 19.561, 24, 28.529, 33.219, 38.053, 43.019, 48.105, 53.302, 58.603]
const n=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var myBtn = document.getElementById('submitbtn')
var numbersBtn=document.getElementById('manual')
numbersBtn.addEventListener('click',()=>{
    var myNumber=document.getElementById('numberinput').value
    window.randomNumbers = Array(Number(myNumber))
    for(let i=0;i<Number(myNumber);i++){
        var node = document.createElement("input");
        node.classList.add('inputs1')
        document.body.appendChild(node);
    }
    const node2=document.createElement('button')
    node2.classList.add('submition')
    document.body.appendChild(node2);
    node2.innerText='submit'
    node2.setAttribute('id','submitManual');
    document.getElementById('submitManual').addEventListener('click',()=>{
    const inputsarray=document.querySelectorAll('.inputs1')
    console.log(inputsarray)
    alert("Please select a sorting algorithm")
    for(let i=0; i<inputsarray.length;i++){
        window.randomNumbers[i]=Number(inputsarray[i].value)
        console.log(randomNumbers[i])
    }
})
})
myBtn.addEventListener('click', ()=>{
    var myNumber=document.getElementById('numberinput').value
    window.randomNumbers = Array(Number(myNumber))
    for(var i=0; i<window.randomNumbers.length; i++){
        window.randomNumbers[i]=Math.floor(Math.random() * 10000) + 1;
        console.log(window.randomNumbers[i]);
}
// alert(Number(myNumber)+ " Random numbers have been generated, please select a sorting algorithm")
}
)
function randomArray(length){
    const arr=Array(length)
    for(var i=0 ; i<length; i++){
        arr[i]=Math.floor(Math.random() * 10000) + 1
    }
    return arr
}


var insertionBtn=document.getElementById('insertion')
insertionBtn.addEventListener('click',()=>{
if (window.randomNumbers==null){
    alert('Please enter how many numbers you would like to sort')
}else{
    document.write(`<p style="height: 3px;"><b>Unsorted Array</b></p>`)
    for(let i=0 ;i<randomNumbers.length ; i++){
        document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
        }
        document.write(`<p style="height: 3px;"><b>Sorted Array</b></p>`)
        const d1 = new Date();
        let starttime = d1.getTime();
        insertionSort(window.randomNumbers,window.randomNumbers.length)
        const d2=new Date()
        let endtime =d2.getTime();
        for(let i=0 ;i<window.randomNumbers.length ; i++){
            document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
            }
            document.write(`<b><p>The time taken for execution in milliseconds is: ${endtime-starttime}&nbsp;</p></b><br>`)
            document.write(`<div class="chart" style="height: 50%; width: 50%;">
            <canvas id="myChart"></canvas>
        </div>`)

        console.log(insertionPoints)
            const ctx = document.getElementById('myChart').getContext('2d')
            const labels=[
                '0',
                '1000',
                '2000',
                '3000',
                '4000',
                '5000',
                '6000',
                '7000',
                '8000',
                '9000',
                '10000',
                '11000',
                '12000',
                '13000',
                '14000',
                '15000',
            ];
            let gradient=ctx.createLinearGradient(0,0,0,400);
            gradient.addColorStop(0,'rgba(58, 123, 213, 1)');
            gradient.addColorStop(1,'rgba(0, 210, 255, 0.3)' )
            const data = {
                labels,
                datasets:[{
                    data:insertionPoints, //insertion
                    label:'Insertion Sort',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"000",
                    pointBackgroundColor:"#fff",
                    tension:0.5,},{
                        data:nSquared, //asymptotic notation O(n^2)
                    label:'Asymptotic Notation O(n²)',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"green",
                    pointBackgroundColor:"#fff",
                    tension:0.4,
                    }
                ]
            }//check DevEd's video for the animation
            const config={
                type:'line',
                data:data,
                options:{
                    responsive:true,
                    scales:{
                        y:{
                            ticks:{
                               callback: function(value){
                                   return value + "ms";
                               }
                            }
                        }
                    }
                }
            }
            const myChart=new Chart(ctx,config)
        }
})
var mergeBtn = document.getElementById('merge')
mergeBtn.addEventListener('click',()=>{
    if (window.randomNumbers==null){
        alert('Please enter how many numbers you would like to sort')
    }else{
        // document.write(`<p style="height: 3px;"><b>Unsorted Array</b></p>`)
        // for(let i=0 ;i<randomNumbers.length ; i++){
        //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
        //     }
        //     document.write(`<p style="height: 3px;"><b>Sorted Array</b></p>`)
            const d1 = new Date();
            let starttime = d1.getTime();
            mergeSort(window.randomNumbers,0,window.randomNumbers.length-1)
            const d2=new Date()
            let endtime =d2.getTime();
            // for(let i=0 ;i<window.randomNumbers.length ; i++){
            //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
            //     }
                document.write(`<b><p>The time taken for execution in milliseconds is: ${endtime-starttime}&nbsp;</p></b><br>`)
                document.write(`<div class="chart" style="height: 50%; width: 50%;">
                <canvas id="myChart"></canvas>
            </div>`)

            console.log(mergePoints)
            const ctx = document.getElementById('myChart').getContext('2d')
            const labels=[
                '0',
                '1000',
                '2000',
                '3000',
                '4000',
                '5000',
                '6000',
                '7000',
                '8000',
                '9000',
                '10000',
                '11000',
                '12000',
                '13000',
                '14000',
                '15000',
            ];
            let gradient=ctx.createLinearGradient(0,0,0,400);
            gradient.addColorStop(0,'rgba(58, 123, 213, 1)');
            gradient.addColorStop(1,'rgba(0, 210, 255, 0.3)' )
            const data = {
                labels,
                datasets:[{
                    data:mergePoints, //insertion
                    label:'Merge Sort',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"000",
                    pointBackgroundColor:"#fff",
                    tension:0.5,},{
                    data:nlogn, //asymptotic notation O(n^2)
                    label:'Asymptotic Notation O(nlogn)',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"green",
                    pointBackgroundColor:"#fff",
                    tension:0.4,
                    }
                ]
            }//check DevEd's video for the animation
            const config={
                type:'line',
                data:data,
                options:{
                    responsive:true,
                    scales:{
                        y:{
                            ticks:{
                               callback: function(value){
                                   return value + "ms";
                               }
                            }
                        }
                    }
                }
            }
            const myChart=new Chart(ctx,config)
        }
})

            
var selectionBtn=document.getElementById('selection')
selectionBtn.addEventListener('click', ()=>{
    if (window.randomNumbers==null){
        alert('Please enter how many numbers you would like to sort')
    }else{
        // document.write(`<p style="height: 3px;"><b>Unsorted Array</b></p>`)
        // for(let i=0 ;i<randomNumbers.length ; i++){
        //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
        //     }
            // document.write(`<p style="height: 3px;"><b>Sorted Array</b></p>`)
            const d1 = new Date();
            let starttime = d1.getTime();
            selectionSort(window.randomNumbers,window.randomNumbers.length)
            const d2=new Date()
            let endtime =d2.getTime();
            // for(let i=0 ;i<window.randomNumbers.length ; i++){
            //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
            //     }
                document.write(`<b><p>The time taken for execution in milliseconds is: ${endtime-starttime}&nbsp;</p></b><br>`)
                document.write(`<div class="chart" style="height: 50%; width: 50%;">
                <canvas id="myChart"></canvas>
            </div>`)
            const ctx = document.getElementById('myChart').getContext('2d')
            const labels=[
                '0',
                '1000',
                '2000',
                '3000',
                '4000',
                '5000',
                '6000',
                '7000',
                '8000',
                '9000',
                '10000',
                '11000',
                '12000',
                '13000',
                '14000',
                '15000',
            ];
            let gradient=ctx.createLinearGradient(0,0,0,400);
            gradient.addColorStop(0,'rgba(58, 123, 213, 1)');
            gradient.addColorStop(1,'rgba(0, 210, 255, 0.3)' )
            const data = {
                labels,
                datasets:[{
                    data:selectionPoints, //insertion
                    label:'Selection Sort',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"000",
                    pointBackgroundColor:"#fff",
                    tension:0.5,},{
                    data:nSquared, //asymptotic notation O(n^2)
                    label:'Asymptotic Notation O(n²)',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"green",
                    pointBackgroundColor:"#fff",
                    tension:0.4,
                    }
                ]
            }//check DevEd's video for the animation
            const config={
                type:'line',
                data:data,
                options:{
                    responsive:true,
                    scales:{
                        y:{
                            ticks:{
                               callback: function(value){
                                   return value + "ms";
                               }
                            }
                        }
                    }
                }
            }
            const myChart=new Chart(ctx,config)
} 
})
var quickBtn=document.getElementById('quick')
quickBtn.addEventListener('click', ()=>{
    if (window.randomNumbers==null){
        alert('Please enter how many numbers you would like to sort')
    }else{
        // document.write(`<p style="height: 3px;"><b>Unsorted Array</b></p>`)
        // for(let i=0 ;i<randomNumbers.length ; i++){
        //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
        //     }
        //     document.write(`<p style="height: 3px;"><b>Sorted Array</b></p>`)
            const d1 = new Date();
            let starttime = d1.getTime();
            quickSort(window.randomNumbers,0,window.randomNumbers.length-1)
            const d2=new Date()
            let endtime =d2.getTime();
            // for(let i=0 ;i<window.randomNumbers.length ; i++){
            //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
            //     }
                document.write(`<b><p>The time taken for execution in milliseconds is: ${endtime-starttime}&nbsp;</p></b><br>`)
                document.write(`<div class="chart" style="height: 50%; width: 50%;">
                <canvas id="myChart"></canvas>
            </div>`)

            console.log(quickPoints)
            const ctx = document.getElementById('myChart').getContext('2d')
            const labels=[
                '0',
                '1000',
                '2000',
                '3000',
                '4000',
                '5000',
                '6000',
                '7000',
                '8000',
                '9000',
                '10000',
                '11000',
                '12000',
                '13000',
                '14000',
                '15000',
            ];
            let gradient=ctx.createLinearGradient(0,0,0,400);
            gradient.addColorStop(0,'rgba(58, 123, 213, 1)');
            gradient.addColorStop(1,'rgba(0, 210, 255, 0.3)' )
            const data = {
                labels,
                datasets:[{
                    data:quickPoints, //insertion
                    label:'Quick Sort',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"000",
                    pointBackgroundColor:"#fff",
                    tension:0.5,},
                    {
                    data:nlogn, //asymptotic notation O(n^2)
                    label:'Asymptotic Notation O(nlogn)',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"green",
                    pointBackgroundColor:"#fff",
                    tension:0.4,
                    }
                ]
            }//check DevEd's video for the animation
            const config={
                type:'line',
                data:data,
                options:{
                    responsive:true,
                    scales:{
                        y:{
                            ticks:{
                               callback: function(value){
                                   return value + "ms";
                               }
                            }
                        }
                    }
                }
            }
            const myChart=new Chart(ctx,config)
            
} 
})
var heapBtn=document.getElementById('heap')
heapBtn.addEventListener('click', ()=>{
    if (window.randomNumbers==null){
        alert('Please enter how many numbers you would like to sort')
    }else{
        // document.write(`<p style="height: 3px;"><b>Unsorted Array</b></p>`)
        // for(let i=0 ;i<randomNumbers.length ; i++){
        //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
        //     }
        //     document.write(`<p style="height: 3px;"><b>Sorted Array</b></p>`)
            const d1 = new Date();
            let starttime = d1.getTime();
            heapSort(window.randomNumbers)
            const d2=new Date()
            let endtime =d2.getTime();
            // for(let i=0 ;i<window.randomNumbers.length ; i++){
            //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
            //     }
                document.write(`<b><p>The time taken for execution in milliseconds is: ${endtime-starttime}&nbsp;</p></b><br>`)
                document.write(`<div class="chart" style="height: 50%; width: 50%;">
                <canvas id="myChart"></canvas>
            </div>`)

            console.log(heapPoints)
            const ctx = document.getElementById('myChart').getContext('2d')
            const labels=[
                '0',
                '1000',
                '2000',
                '3000',
                '4000',
                '5000',
                '6000',
                '7000',
                '8000',
                '9000',
                '10000',
                '11000',
                '12000',
                '13000',
                '14000',
                '15000',
            ];
            let gradient=ctx.createLinearGradient(0,0,0,400);
            gradient.addColorStop(0,'rgba(58, 123, 213, 1)');
            gradient.addColorStop(1,'rgba(0, 210, 255, 0.3)' )
            const data = {
                labels,
                datasets:[{
                    data:heapPoints, //insertion
                    label:'Heap Sort',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"000",
                    pointBackgroundColor:"#fff",
                    tension:0.5,},{
                    data:nlogn, //asymptotic notation O(n^2)
                    label:'Asymptotic Notation O(nlogn)',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"green",
                    pointBackgroundColor:"#fff",
                    tension:0.4,
                    }
                ]
            }//check DevEd's video for the animation
            const config={
                type:'line',
                data:data,
                options:{
                    responsive:true,
                    scales:{
                        y:{
                            ticks:{
                               callback: function(value){
                                   return value + "ms";
                               }
                            }
                        }
                    }
                }
            }
            const myChart=new Chart(ctx,config)
} 
})
var radixBtn=document.getElementById('radix')
radixBtn.addEventListener('click', ()=>{
    if (window.randomNumbers==null){
        alert('Please enter how many numbers you would like to sort')
    }else{
        // document.write(`<p style="height: 3px;"><b>Unsorted Array</b></p>`)
        // for(let i=0 ;i<randomNumbers.length ; i++){
        //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
        //     }
        //     document.write(`<p style="height: 3px;"><b>Sorted Array</b></p>`)
            const d1 = new Date();
            let starttime = d1.getTime();
            radixSort(window.randomNumbers, window.randomNumbers.length)
            const d2=new Date()
            let endtime =d2.getTime();
            // for(let i=0 ;i<window.randomNumbers.length ; i++){
            //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
            //     }
                document.write(`<b><p>The time taken for execution in milliseconds is: ${endtime-starttime}&nbsp;</p></b><br>`)
                document.write(`<div class="chart" style="height: 50%; width: 50%;">
                <canvas id="myChart"></canvas>
            </div>`)

            console.log(radixPoints)
            const ctx = document.getElementById('myChart').getContext('2d')
            const labels=[
                '0',
                '1000',
                '2000',
                '3000',
                '4000',
                '5000',
                '6000',
                '7000',
                '8000',
                '9000',
                '10000',
                '11000',
                '12000',
                '13000',
                '14000',
                '15000',
            ];
            let gradient=ctx.createLinearGradient(0,0,0,400);
            gradient.addColorStop(0,'rgba(58, 123, 213, 1)');
            gradient.addColorStop(1,'rgba(0, 210, 255, 0.3)' )
            const data = {
                labels,
                datasets:[{
                    data:radixPoints, //insertion
                    label:'Radix Sort',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"000",
                    pointBackgroundColor:"#fff",
                    tension:0.5,},{
                    data:nSquared, //asymptotic notation O(n^2)
                    label:'Asymptotic Notation O(nlogn)',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"green",
                    pointBackgroundColor:"#fff",
                    tension:0.4,
                    }
                ]
            }//check DevEd's video for the animation
            const config={
                type:'line',
                data:data,
                options:{
                    responsive:true,
                    scales:{
                        y:{
                            ticks:{
                               callback: function(value){
                                   return value + "ms";
                               }
                            }
                        }
                    }
                }
            }
            const myChart=new Chart(ctx,config)
}
})
var countingBtn=document.getElementById('counting')
countingBtn.addEventListener('click', ()=>{
    if (window.randomNumbers==null){
        alert('Please enter how many numbers you would like to sort')
    }else{
        // document.write(`<p style="height: 3px;"><b>Unsorted Array</b></p>`)
        // for(let i=0 ;i<randomNumbers.length ; i++){
        //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
        //     }
        //     document.write(`<p style="height: 3px;"><b>Sorted Array</b></p>`)
            const d1 = new Date();
            let starttime = d1.getTime();
            countSort(window.randomNumbers,0, 10000)
            const d2=new Date()
            let endtime =d2.getTime();
            // for(let i=0 ;i<window.randomNumbers.length ; i++){
            //     document.write(`<p style="display: inline-block;">${window.randomNumbers[i]} &nbsp;</p>`)
            //     }
                document.write(`<b><p>The time taken for execution in milliseconds is: ${endtime-starttime}&nbsp;</p></b><br>`)
                document.write(`<div class="chart" style="height: 50%; width: 50%;">
                <canvas id="myChart"></canvas>
            </div>`)

            console.log(countingPoints)
            const ctx = document.getElementById('myChart').getContext('2d')
            const labels=[
                '0',
                '1000',
                '2000',
                '3000',
                '4000',
                '5000',
                '6000',
                '7000',
                '8000',
                '9000',
                '10000',
                '11000',
                '12000',
                '13000',
                '14000',
                '15000',
            ];
            let gradient=ctx.createLinearGradient(0,0,0,400);
            gradient.addColorStop(0,'rgba(58, 123, 213, 1)');
            gradient.addColorStop(1,'rgba(0, 210, 255, 0.3)' )
            const data = {
                labels,
                datasets:[{
                    data:countingPoints, //insertion
                    label:'Counting Sort',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"000",
                    pointBackgroundColor:"#fff",
                    tension:0.5,},{
                    data:n, //asymptotic notation O(n^2)
                    label:'Asymptotic Notation O(n)',
                    fill:true,
                    backgroundColor:gradient,
                    borderColor:"green",
                    pointBackgroundColor:"#fff",
                    tension:0.4,
                    }
                ]
            }//check DevEd's video for the animation
            const config={
                type:'line',
                data:data,
                options:{
                    responsive:true,
                    scales:{
                        y:{
                            ticks:{
                               callback: function(value){
                                   return value + "ms";
                               }
                            }
                        }
                    }
                }
            }
            const myChart=new Chart(ctx,config)
}
})

const myarr1=new Array(16);
var counter1 =0
for(var i=0; i<myarr1.length; i++){
    myarr1[i]=new randomArray(counter1)
    counter1+=1000
    }
const insertionPoints = new Array(16)
for(var i=0; i<myarr1.length ; i++){
    const d3 = new Date();
    let starttime1 = d3.getTime();
    insertionSort(myarr1[i],myarr1[i].length)
    const d4=new Date()
    let endtime1 =d4.getTime();
    insertionPoints[i]=endtime1-starttime1;
}

const myarr2=new Array(16);
var counter2 =0
for(var i=0; i<myarr2.length; i++){
    myarr2[i]=new randomArray(counter2)
    counter2+=1000
        }
const mergePoints = new Array(16)
for(var i=0; i<myarr2.length ; i++){
    const d5 = new Date();
    let starttime2 = d5.getTime();
    mergeSort(myarr2[i],0,myarr2[i].length-1)
    const d6=new Date()
    let endtime2 =d6.getTime();
    mergePoints[i]=endtime2-starttime2;
    }

    const myarr3=new Array(16);
    var counter3 =0
    for(var i=0; i<myarr3.length; i++){
        myarr3[i]=new randomArray(counter3)
        counter3+=1000
        }
    const selectionPoints = new Array(16)
    for(var i=0; i<myarr3.length ; i++){
        const d7 = new Date();
        let starttime3 = d7.getTime();
        selectionSort(myarr3[i],myarr3[i].length)
        const d8=new Date()
        let endtime3 =d8.getTime();
        selectionPoints[i]=endtime3-starttime3;
    }
    const myarr4=new Array(16);
    var counter4 =0
    for(var i=0; i<myarr4.length; i++){
        myarr4[i]=new randomArray(counter4)
        counter4+=1000
        }
    const quickPoints = new Array(16)
    for(var i=0; i<myarr4.length ; i++){
        const d9 = new Date();
        let starttime4 = d9.getTime();
        quickSort(myarr4[i],0,myarr4[i].length-1)
        const d10=new Date()
        let endtime4 =d10.getTime();
        quickPoints[i]=endtime4-starttime4;
    }

    const myarr5=new Array(16);
    var counter5 =0
    for(var i=0; i<myarr5.length; i++){
        myarr5[i]=new randomArray(counter5)
        counter5+=1000
        }
    const heapPoints = new Array(16)
    for(var i=0; i<myarr5.length ; i++){
        const d11 = new Date();
        let starttime5 = d11.getTime();
        heapSort(myarr5[i])
        const d12=new Date()
        let endtime5 =d12.getTime();
        heapPoints[i]=endtime5-starttime5;
    }

    const myarr6=new Array(16);
    var counter6 =0
    for(var i=0; i<myarr6.length; i++){
        myarr6[i]=new randomArray(counter6)
        counter6+=1000
        }
    const radixPoints = new Array(16)
    for(var i=0; i<myarr6.length ; i++){
        const d13 = new Date();
        let starttime6 = d13.getTime();
        radixSort(myarr6[i],myarr6[i].length)
        const d14=new Date()
        let endtime6 =d14.getTime();
        radixPoints[i]=endtime6-starttime6;
    }

    const myarr7=new Array(16);
    var counter7 =0
    for(var i=0; i<myarr7.length; i++){
        myarr7[i]=new randomArray(counter7)
        counter7+=1000
        }
        console.log(myarr7)
    const countingPoints = new Array(16)
    for(var i=0; i<myarr7.length ; i++){
        const d15 = new Date();
        let starttime7 = d15.getTime();
        countSort(myarr7[i],0, 10000)
        const d16=new Date()
        let endtime7 =d16.getTime();
        countingPoints[i]=endtime7-starttime7;
    }

var btnOk=document.getElementById('btnOk')
var algo1=document.getElementById('algo1')
var algo2=document.getElementById('algo2')
var InsertionOption=document.getElementById('InsertionOption')
var MergeOption=document.getElementById('MergeOption')
var SelectionOption=document.getElementById('SelectionOption')
var RadixOption=document.getElementById('RadixOption')
var QuickOption=document.getElementById('QuickOption')
var CountingOption=document.getElementById('CountingOption')
var HeapOption=document.getElementById('HeapOption')
var algolist2 = algo2.querySelectorAll('option')
var algolist1=algo1.querySelectorAll('option')

btnOk.addEventListener('click', ()=>{
    const insertionData={
        value:'Insertion',
        data:insertionPoints,
    }
    const mergeData={
        value:'Merge',
        data:mergePoints,
    }
    const selectionData={
        value:'Selection',
        data:selectionPoints,
    }
    const radixData={
        value:'Radix',
        data:radixPoints,
    }
    const quickData={
        value:'Quick',
        data:quickPoints,
    }
    const countingData={
        value:'Counting',
        data:countingPoints,
    }
    const heapData={
        value:'Heap',
        data:heapPoints,
    }
    const sortingAlgorithms=[insertionData,mergeData, selectionData, radixData, quickData, countingData, heapData]
    for(var i=0 ; i<algolist1.length;i++){
        if (algolist1[i].selected==true){
            var x1 = algolist1[i].value
            console.log(x1)
        }
    }
    for(var i=0 ; i<algolist2.length;i++){
        if (algolist2[i].selected==true){
            var x2 = algolist2[i].value
            console.log(x2)
        }
    }
// console.log(sortingAlgorithms[0].value)
// console.log(sortingAlgorithms[0]['value'])
// console.log(x1.localeCompare(sortingAlgorithms[0].value)==0)
for(var i=0 ;i<sortingAlgorithms.length;i++){
    if(x1.localeCompare(sortingAlgorithms[i].value)==0){
        var x1graph=sortingAlgorithms[i]['data']
    }
}
for(var i=0 ;i<sortingAlgorithms.length;i++){
    if(x2.localeCompare(sortingAlgorithms[i]['value'])==0){
        var x2graph=sortingAlgorithms[i]['data']
    }
}
console.log(x1graph)
console.log(x2graph)
document.write(`<div class="chart" style="height: 50%; width: 50%;">
<canvas id="myChart"></canvas>
</div>`)
const ctx = document.getElementById('myChart').getContext('2d')
const labels=[
    '0',
    '1000',
    '2000',
    '3000',
    '4000',
    '5000',
    '6000',
    '7000',
    '8000',
    '9000',
    '10000',
    '11000',
    '12000',
    '13000',
    '14000',
    '15000',
];
let gradient=ctx.createLinearGradient(0,0,0,400);
gradient.addColorStop(0,'rgba(58, 123, 213, 1)');
gradient.addColorStop(1,'rgba(0, 210, 255, 0.3)' )
const data = {
    labels,
    datasets:[{
        data:x1graph, //insertion
        label:x1+' Sort',
        fill:true,
        backgroundColor:gradient,
        borderColor:"000",
        pointBackgroundColor:"#fff",
        tension:0.5,},{
        data:x2graph, //asymptotic notation O(n^2)
        label:x2 + ' Sort',
        fill:true,
        backgroundColor:gradient,
        borderColor:"green",
        pointBackgroundColor:"#fff",
        tension:0.4,
        }
    ]
}
const config={
    type:'line',
    data:data,
    options:{
        responsive:true,
        scales:{
            y:{
                ticks:{
                   callback: function(value){
                       return value + "ms";
                   }
                }
            }
        }
    }
}
const myChart=new Chart(ctx,config)

})

algo2.addEventListener('click', ()=>{
    for(var i=0;i<algolist2.length;i++){
        if(algolist2[i].value===algo1.value){
        algolist2[i].remove()
        }
    }
})
// Sorting Algorithms Functions

function insertionSort(arr, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
}
function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
    var L = new Array(n1); 
    var R = new Array(n2);
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
    var i = 0;
    var j = 0;
    var k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
function mergeSort(arr,l, r){
    if(l>=r){
        return;
    }
    var m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m);
    mergeSort(arr,m+1,r);
    merge(arr,l,m,r);
}
function selectionSort(arr,  n)
{
    var i, j, min_idx;
    for (i = 0; i < n-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
        swap(arr,min_idx, i);
    }
}
function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
function heapSort(arr)
    {
        var n = arr.length;

        // Build heap (rearrange array)
        for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
            heapify(arr, n, i);

        // One by one extract an element from heap
        for (var i = n - 1; i > 0; i--) {
            // Move current root to end
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // call max heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }

    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
    function heapify(arr, n, i)
    {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2

        // If left child is larger than root
        if (l < n && arr[l] > arr[largest])
            largest = l;

        // If right child is larger than largest so far
        if (r < n && arr[r] > arr[largest])
            largest = r;

        // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    }
    function getMax(arr,n)
    {
        let mx = arr[0];
            for (let i = 1; i < n; i++)
                if (arr[i] > mx)
                    mx = arr[i];
            return mx;
    }
     
    // A function to do counting sort of arr[] according to
        // the digit represented by exp.
    function countingSort(arr,n,exp)
    {
        let output = new Array(n); // output array
            let i;
            let count = new Array(10);
            for(let i=0;i<10;i++)
                count[i]=0;
      
            // Store count of occurrences in count[]
            for (i = 0; i < n; i++)
                count[Math.floor(arr[i] / exp) % 10]++;
      
            // Change count[i] so that count[i] now contains
            // actual position of this digit in output[]
            for (i = 1; i < 10; i++)
                count[i] += count[i - 1];
      
            // Build the output array
            for (i = n - 1; i >= 0; i--) {
                output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
                count[Math.floor(arr[i] / exp) % 10]--;
            }
      
            // Copy the output array to arr[], so that arr[] now
            // contains sorted numbers according to current digit
            for (i = 0; i < n; i++)
                arr[i] = output[i];
    }
     
    // The main function to that sorts arr[] of size n using
        // Radix Sort
    function radixSort(arr,n)
    {
        // Find the maximum number to know number of digits
            let m = getMax(arr, n);
      
            // Do counting sort for every digit. Note that
            // instead of passing digit number, exp is passed.
            // exp is 10^i where i is current digit number
            for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
                countingSort(arr, n, exp);
    }
// function findMaximum(arr){arr.reduce((acc, val) => val > acc ? val: acc, Number.MIN_VALUE)}
// function countSort (arr){
//    const max = findMaximum(arr);
//    const counts = new Array(max + 1);
//    counts.fill(0);
//    arr.forEach(value => counts[value]++);
//    const res = [];
//    let resultIndex = 0;
//    counts.forEach((count, index) => {
//       for (let i = 0; i < count; i++) {
//          res[resultIndex] = index;
//          resultIndex++
//       }
//    })
//    return arr
// function countSort(arr) {
// return arr.reduce((acc, v) => (acc[v] = (acc[v] || 0) + 1000, acc), [])
// .reduce((acc, n, i) => acc.concat(Array(n).fill(i)), []);
// }
// function countSort(inputArr, n = inputArr.length){
//     let k = Math.max(...inputArr);
//     let t;
//     //Create a temporary with 0 zero value 
//     //as the same length of max elemet + 1
//     const temp = new Array(k + 1).fill(0);
    
//     //Count the frequency of each element in the original array
//     //And store it in temp array
//     for(let i = 0; i < n; i++){
//       t = inputArr[i];
//       temp[t]++;
//     }
  
    //Update the count based on the previous index
    // for(let i = 1; i <= k; i++){
    //   // Updating elements of count array 
    //   temp[i] = temp[i] + temp[i - 1];  
    // }
    
//     //Output arr
//     const outputArr = new Array(n).fill(0);
    
//     for(let i = n - 1; i >= 0; i--) {
//       // Add elements of array A to array B
//       t = inputArr[i];
//       outputArr[temp[t] - 1] = t;  
          
//       // Decrement the count value by 1
//       temp[t] = temp[t] - 1;		
//      }
    
//     return outputArr;
//   }
function countSort(arr, min, max)
  {
    var i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}

  function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}