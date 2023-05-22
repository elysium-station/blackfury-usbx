// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import ElysiumstationBlackfuryBlackfuryErc20V1 from './elysiumstation/blackfury/blackfury.erc20.v1'
import ElysiumstationBlackfuryBlackfuryGaugeV1 from './elysiumstation/blackfury/blackfury.gauge.v1'
import ElysiumstationBlackfuryBlackfuryMakerV1 from './elysiumstation/blackfury/blackfury.maker.v1'
import ElysiumstationBlackfuryBlackfuryOracleV1 from './elysiumstation/blackfury/blackfury.oracle.v1'
import ElysiumstationBlackfuryBlackfuryStakingV1 from './elysiumstation/blackfury/blackfury.staking.v1'
import ElysiumstationBlackfuryBlackfuryVeV1 from './elysiumstation/blackfury/blackfury.ve.v1'
import ElysiumstationBlackfuryBlackfuryVestingV1 from './elysiumstation/blackfury/blackfury.vesting.v1'
import ElysiumstationBlackfuryBlackfuryVoterV1 from './elysiumstation/blackfury/blackfury.voter.v1'


export default { 
  ElysiumstationBlackfuryBlackfuryErc20V1: load(ElysiumstationBlackfuryBlackfuryErc20V1, 'blackfury.erc20.v1'),
  ElysiumstationBlackfuryBlackfuryGaugeV1: load(ElysiumstationBlackfuryBlackfuryGaugeV1, 'blackfury.gauge.v1'),
  ElysiumstationBlackfuryBlackfuryMakerV1: load(ElysiumstationBlackfuryBlackfuryMakerV1, 'blackfury.maker.v1'),
  ElysiumstationBlackfuryBlackfuryOracleV1: load(ElysiumstationBlackfuryBlackfuryOracleV1, 'blackfury.oracle.v1'),
  ElysiumstationBlackfuryBlackfuryStakingV1: load(ElysiumstationBlackfuryBlackfuryStakingV1, 'blackfury.staking.v1'),
  ElysiumstationBlackfuryBlackfuryVeV1: load(ElysiumstationBlackfuryBlackfuryVeV1, 'blackfury.ve.v1'),
  ElysiumstationBlackfuryBlackfuryVestingV1: load(ElysiumstationBlackfuryBlackfuryVestingV1, 'blackfury.vesting.v1'),
  ElysiumstationBlackfuryBlackfuryVoterV1: load(ElysiumstationBlackfuryBlackfuryVoterV1, 'blackfury.voter.v1'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
