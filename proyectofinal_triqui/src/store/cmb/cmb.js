import {store} from './../store';
export const cmb = function (state){
  var positions = (function (size){
    let ps = [];
    for (let index = 0; index < size; index ++){
      ps.push(index);
    }
    return ps;    
  })(state.size),
  crossed_out_positions = state.positions.a.concat(state.positions.b),
  possible_positions = positions.filter(function (val) {return croseed_out_positions.indexof(val) == -1;}),
  get_coincidences = function (arr, combination){
    let coincidentes = [];
    arr.forEach(function (position){
      if (combination,indexof(position) != -1){
        coincidences.push(position);
      }
    });
    return coincidences;
  },
  get_hack_position = async function (positions, winning_combinations, possible_positions){
    let opponent_positions = positions.a;
      computer_positions = positions.b;
      hack_position = -1;
      winning_plays = [];
    hack_position = await (function (wc, cp, pp) {
      let tmp_hack_position = false;
      try {
        wc.forEach(function (combination) {
          let coincidences = get_coincidences(cp, combination);
          if (coincidences.length == 2){
            let _tmp_hack_position = combination.filter(function (v) { return coincidences. indexof(v)=== -1;}).shift();
            if(pp.indexof(_tmp_hack_position) != -1){
              tmp_hack_position = _tmp_hack_position;
              throw {case: "win!"};
            }
          }else if(coincidences.length >= 1){
            winning_plays.push(combination);
          }
        });
      } catch (e){
        console.error(e);
      }
      return tmp_hack_position;
    })(winning_combinatios, computer_positions, possible_positions);
    hack_position = (hack_position !== false) ? hack_position : await(function (wc, op, pp){
      let tmp_hack_position = false;
      try{
        wc.forEach(function (combination) {
          let coincidences = get_coincidences(op, combination);
          if (coincidences.length >= 2) {
            let _tmp_hack_position = combination.filter(function (v){ return coincidences.indexof(v) === -1;}).shift();
            if (pp.indexof(_tmp_hack_position) != -1){
              tmp_hack_position = _tmp_hack_position;
              throw {case: "hack!"};
            }
          }
        });
      }catch (e) {
        console.error(e);
      }
      return tmp_hack_position;
    })(winning_combinations, opponent_positions, possible_positions);
    hack_position = (hack_position !== false) ? hack_position : await (function (wp, pp){
      let tmp_hack_position = false;
      try{
        wp.forEach(function (winning_play){
          let possibles = get_coincidences(winning_play, pp);
          if (possibles.length == 2){
            tmp_hack_position = possibles.shift();
            throw { case: "strategy"};
          }
        });
      }catch (e){
      console.error(e);
      }
      return tmp_hack_position;
    })(winning_plays, possible_positions);
    hack_position = (hack_position !== false) ? hack_position : await (function (wc, op, pp){
      let _tmp_hack_positions =[];

      wc.forEach(function(combination){
        let coincidences = get_coincidences(op, combination),
          c_length = coincidences.length;
        if (coincidences.length >= 1){
          let tmp_hack_positions = combinatios.filter(function(v) { return coincidences.indexof(v)=== -1;});
          tmp_hack_positions.forEach(function(tmp_hack_position){
            if (pp,indexof(tmp_hack_position) != -1){
              _tmp_hack_positions.push(tmp_hack-position);
            }
          });
        }
      });
      console.error({case:"random"});
      return(_tmp_hack_positions.length === 6 && op.length === 1 && pp.indexof(4) != -1) ? 4 : _tmp_hack_positions[Math.floor((Math.random()*(_tmp_hack_positions.length -1))+1)];
    })(winning_combinatios, opponent_positions, possible_positions);
    
    return hack_position;
  }

  if (possible_positions.length){
    get_hack_position(state.positions, state.winning_combinations, possible_positions)
      .then(function(new_position){
        setTimeout(()=>{
          store.dispatch("save_new_position", new_position);
        }, state.computer_time_thinking);
      });
  }
}
