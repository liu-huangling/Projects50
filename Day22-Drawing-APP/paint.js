const app = {
    data(){
      return {
        paint:1,
        idraw:false,
        color:null,
        coordinate:{
          X1:undefined,
          Y1:undefined,
          X2:undefined,
          Y2:undefined,
        },
        board:null,
      };
    },
    mounted(){
      this.init();
    },
    methods: {
      init(){
        this.board = this.$refs.canvas;
        this.board.width = 480;
        this.board.height = 500;
        this.ctx = this.board.getContext('2d');
        this.color = "#000000";
      },
      Mousedown(event){
        this.idraw = true;
        this.coordinate.X1 = event.offsetX;
        this.coordinate.Y1 = event.offsetY;
        this.ctx.strokeStyle = this.color;
        this.ctx.lineCap = "round";
        this.ctx.lineJoin = "round";
        this.ctx.lineWidth = this.paint;
      },
      Mousemove(event){
        if(!this.idraw){
          return;
        }
        this.coordinate.X2 = event.offsetX;
        this.coordinate.Y2 = event.offsetY;
        this.ctx.beginPath();
        this.ctx.moveTo(this.coordinate.X1, this.coordinate.Y1);
        this.ctx.lineTo(this.coordinate.X2, this.coordinate.Y2);
        this.ctx.stroke();
  
        // 更新起始點座標
        this.coordinate.X1 =  this.coordinate.X2;
        this.coordinate.Y1 =  this.coordinate.Y2;
      },
      drawFinish(){
        this.ctx.closePath();
        this.idraw = false;
      },
      editPaint(item){
        if(item == "dash"){
          this.paint--;
        }else if(item == "plus"){
          this.paint++;
        }
        if(this.paint<=1){
          this.paint = 1;
        }
        if(this.paint>=50){
          this.paint = 50;
        }
        ctx.lineWidth = this.paint;
      },
      editColor(event){
        this.color = event.target.value;
        this.ctx.strokeStyle = event.target.value;
        
      },
      clearBoard(){
        this.ctx.clearRect(0,0,canvas.width,canvas.height);
      }
    }
  };
  
  Vue.createApp(app).mount("#app");