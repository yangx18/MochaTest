function multiply(x, y) {
	i =0 ;
	while(i!=y-1){
		x=x*x;
		i=i+1;
	}
  return x ;
}

module.exports = multiply;