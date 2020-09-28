import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image=" https://images.unsplash.com/photo-1601068079888-2066afb727f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 "
        profileImg="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/75210839_2663917646998820_1701630978562195456_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=qO7zPkdRcKkAX9WGd2q&_nc_ht=scontent.fktm3-1.fna&oh=8a3809ab5210c4f5e9456b5adfd78f90&oe=5F92DF3D "
        title="shresritik"
      />
      <Story
        image="https://images.unsplash.com/photo-1601110834637-010c1db7ddc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 "
        profileImg="data:image/jpeg;base64,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"
        title="Salman Khan"
      />
      <Story
        profileImg="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDxUQEhAQFRUQFRUVEBUQEBUVEBUXFRUWGRUVFRUYHSggGBolGxYXITEhJSkrLi4uFx8zODMtNystLisBCgoKDg0OGhAQFS0fHR4tLSstLSstKy0tLSstKy0tLS0tLS0tKystKystLSsrLS0rKy0tKy0tLS0tKy0tKystN//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBQYHBAj/xABGEAACAQIDBAcDCAcGBwEAAAABAgADEQQSIQUxQVEGBxMiYXGBMpGhFFJicoKxwfAVIzNCU6LRQ5KjsrPxCCQlVIOT4Rb/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIEA//EACARAQEBAQADAAIDAQAAAAAAAAABEQIDEiEEQRMiYTH/2gAMAwEAAhEDEQA/AOtWiQBKptpEXkyIQvBiTCVAkxEMkREBERAReJTUqBVLMQoUEsWICgDeSTuECMRXWmhd2CqgJZmNgANSSZqm0On+GWkKlLPUDsyqwptk7qhjobFj3lFhuzAm01zp304oYqnW2fRR3zrbtb5VzKQ2ikd5Co9q+twQCLE6hsjZy0kZ6wJULVbU2BIUZwL7rGna/DSefXb054RtbrD2nXqOFxBopUDdyiqDIlr2WoVz5rD27jfpaevZ3WLtAMyCrTc2pU0euAKKa5c1XcTcEEtfQrxGk1hVzio6jRf2r6hGJN1VQdyKQT4hVvxlpTmspJRTuFjew3uQP3tT8bcpn2rfrHV8L1p0qFFxiDUr1FY9i9GitJK66d5VLXQBiQSeWlzcDKdBesFdo1WoulOm9i1IIzEEKASpLAXYXJuALhTpprwesAWygkjcvc18NBvM9OErPhqg7KrlZTftEvmUkG+QixvbTS190s6ZvL6nkTmnQbrIFZkw+McJUK5c5CiiWG67C2S4vobi9tRuPSwbi4IIOoI1BHMGb1mwiIlMIiIMIiIMIiIRF5MRBiJMRBhERK0REQyRIkwhERaAgyZEIRJiBE1/p1jcPTwNRMTUyLXBpp3Xa7WLAEUwWt3dfDzmwzg/Wxtpau0morULJTVUbvlkVwAWCi3cN95Um/hY3luRrmbWLwOJp0gjKl+1coNco76MF1OawGYjj7I4me5KL4rDZGqFFRELgg/2rl9efecH7PuoOER0pLmKrcl3FjlLG4YHxBAHPLNfrYtw1QBrBjY23aXGg8gJ4Pdl8Zs9n7OindoVa1iNNKaMVWo/HvkAj6uvCevE7HpFM7MAoA3DhoSoHMezbfdSeJMwtHbDimabbu6beCqbjwGUKPQy1V2o7IaZYhS1/GwOm70PmZdTHrOyEGJN2NgqOirfO7NqSBY3ubW8COUxeJpKpZmBOYHs8zntCdb1DbS28/m59yY8iua5uq91bAd5aaqFAHI5Ra3jyMvYvDLWq9xaSvV77Z2z9mo3ZjuBsBpqN/ACUa1iRfjceG6d96oNsUq+z1opcVMNZayndc3sy8ACBew0G6cF2nRCVCFN1BsDwPOw4CZ/q16StgccjWXs6xWlWB+YzDUeINiPIjjLGK+lYkA3Fxx5bpM9EIiICIiAiIhMIiICIiFQJMRKzpEQIZIEmIWIkxEKSJMQERECV3z5P22WGKrK/tJWqq4vxVyLelp9Xz5W6XkHaWLYWscViCLG/wDavrfjff6zPSxlNnVGrU8oJJT2dVtYm50bcbyz+jnvqv8AUG/3zCYTFGmbgn0Np1Doph2roGcZgRx1PgL8rzw7vrNdHE9rjWMJsV7hgt78eGvP3Eesuf8A5KuVuENyRYef+33TsGzsBSQBco0mVyou5R8J58+TXp148cg2n0JrLRUqtyC2nhpb8+E11cNUw7FKiEAjvXW5J8d1+dr20vO84yrcWFtJre39nLVpEWFyLXtr5iZ/lyt/xSxxDa9VC/d152FlHgL/AICePB4g0qi1Ba6spGnIg6ct09O18IaVVkbSx0vxnkwuGNWotJfaqsqJpvZzlUe8idPNcfU+/X1V0ZxT1sDhq1TV6tCk9Q2tdmpqWOnMmZKW6FLIipe+RQt+eUW/CXJ6skREBERAREQEREBERARESs4REmDCIiDCIiAiIgIkSYCfPHWx0SqYLGPiERzh8QTUDhe5Td2JakxG7U3BNr5rakGfQ88G3cB8pwlbD/xqToLi4BZTlNuNjY+klWPlXZ1A1aqUxvdgvvM73sTCLRpqigd0W905TsjZJw+0aSkHTve8f0IM3vbOLKgXL5FuWWnftH8BbWcXmvtY7fBPWXW84UA65h42axHwmQ7IX3n0Nz7zOTNR2i9RPk2HqUKbqGDGqXpWIYkuSLKQQBlF/aFrzaOhuLx1SpkrrlGQ6k3YnX+nxmfX1jdvtW04wqASXtbeTNW2rt6jTJBzHLvKrcDzMwe39jYyvWZKtcpRQkZkuTY7u6N+ttDMbS2BXVVpJi6tXvXayWoBLC4IPjflv8NZ6y/bWp7T5GL6waaVUWui+DHz1X8+MzvUp0SSoTtKrqaLmnQTgHyKTVY8TapYDhqd9pZ6VbM7PB9ne5bLv3XzC1vum/8AVZgux2VRU72aq7c7moy6+ij3To8NmY5fyJl1tkRE6HPpERAREQEREKREQEREAJMgSYgRESoREQEREGkRaTaE1ESbQBCaiJVaQYXXLenWzOxxS19LZltpqFdx3SfAggeC25TN7JyOliByE83WXsbG1mD4YCpTqUezqUyCWV0Z2R1I3XDkG+ndF7XvMR0X2hnTXRkOWoOIYaEH1vOLzcWff07/AMfudfP22yjsCjvC7zrYm3untwaKKwVQAFuLASnA4vMLTA4npUmFxZXEKaaZiEqk3Q8Rm+bod/3Tyj0u/dZ+qpFc8m3/AJ90rrAaiaL0p6c03qLTwlVDcfraoBZFHBVt7TH4TYKm1FqUsyOD8628ekt5sObLn1r/AEmpNWqpRW16jqovuuWAFzOlbKwQoUUpA3yDU8yTc+lzOb7EY19q0Ke/IWrOOQRTl/mK++dTnT4Oc5cv5PW9ZESYAk2nvjltRBk2gCBTEkiIWIiTENIiTECIkxARETWM6SJMWkTSBJkwaptJtEmBESZEISYtJtApiTaan0t6fYTZ+anm7XEAG1GkQSptp2rbqY3b+9bcDAxfWr0rXCJSwYcq2KdflDI1np4bOBUYEaqWGZQeQeaV0hw36K2uyU1C0K1qlFVvkCOCCo8A4bTgLTSNtbRq4zEPiK5DVKpu1hZQNwVRwUCwA8OJ1nWMXgV2x0do4ka4jAIVc6Fj2QC1Q31kVKnnbmZjubHpx1l15cV0hNOgWpnvG687aEg25nQes19H+XPd1xDO/BaLsDoLa5bbhvHOYnZmJZWyOd9gwPhOlbTpVqdDtsOFJCqcpAKkDgVnL84d3N9v+tSTonUoU8ww1S5N27WrSANgb2CkkLu1I5bpYoUa+DtUewR1NlDEgXByre3h90zWyjtDEVVOLqBaLalQgVDY+zprv5mVdOMRScU6NJ1bvXci1soUgy7tws5zY2Hqo2b+rq41mBeuezUfvKiE3zcix18lE6BaaT0JYrT7milbDjw0PjPPj+sb5BiThdo4V0O+nXw3foVUO6oEYhlHArdiDpOuTPjh7+1vwiYvYnSPCY0Xw2JpVDxUNaqPrU2sw9RMpKxhJvEiDAyLSZN4FMSTIhdIiIUiIhQSZEmVmkSbSQJEREmIRTJkxAgCTaJ4Nr7bw2EXPiK9KkDuDt32+og7zHwAMD3zD9Iek2FwC5sRWVSRdKY71Z/q0xqR47uZnPelfW2CjUsAjhjp29VQLDnTTXXxa1uXLlWIrvUcu7MzMbszsWdjzZjqT5wN36XdZ+Jxd6WHzYakdO43/MuPpVB7A8F/vGaCF185UBEAw4zq3UPtS1avg29msgqoCNMyd2oPEsrL6U5ywCZboztRsHi6OJW/6lwzAbyu51HiULD1iq27pp0WOHxDKoIy60jvzIfZ/p5iY7CbbroopEtZb2F9CLW15zuW3dk08fhhlK3tnoPw7wuNfmsLfA8JyTaexmUlShVlJBB3i05O563/AB3+Kzuf7GKxG08TVAAUgbtTfTlYT0YXZZ7OoScz9nU9LpZQPWW6TONLaiZvY6GzX3m33zE6bvH7bR1d0ycBQa97qVJ+lTYow96mZnpt0QpbVwnYtZatPvYarbVHtuPNDuI8jvAnj6uVyU6uFO6m5qUvqVNSPMPm/vLNyC2nXOtjh7mdWPkDGYKph6zUqilKtFirA71YcQfcQRvBBE27o31l4/B2V3+U0h+5iCS4H0K3tD7WYcgJ5+tOg6bZxQa2ppmnYWGQ0aeQDyAt5gzVSJtl3PAdcGBcgVaWJog72KrUQeeQ5iPEL7pv+BxdOvTWrSqJURxdHRgykeBE+Si06D1O9Kmw2LGEqN+pxTBQDuSsdEYcs3sHxKcoR3u0iTIMCItEmBTaJVIMCIi0QuptJAkxCaREQhERCEs43FpRpPWquESkpZ2bcqgXJl6ct699udnh6OCUkHEMalUDjTpEZVPgXIP/AI4GG6UdbtaqTTwKdil/2tQBq7DmqkZafxPlOe4jEPVcvUdndtXZ2LOfNjqZ4UM9lMg6++BSElWSXbRAs5ZTlEvGW6i/kQIprY79PHX3cp6FnnV7+fGXlMK791Tbb7XZgRjdsKxo6/N0an6BTl+wZmtv7NWqna273Ege7+k5V1L7RybQbDMe7iqZtr/aUrsth9Q1fcJ26pQABUi6tvmO+ZZj0479brl+L2YL5gLW3/jPdhMGNNJtuI2HTb2ajAnmAR+E8f6LajvsRwYbj4W4Gcl8fUd083HSxswCjXSpzORvJ7D/ADZT6TciLzTcQlwRzG/8ZtuErZ6av85Q3vF56+K/pz/kc/ZXGOu3oniHxB2lTQPRSkiV8l+1TIWvUZeKWYXI3W101nJGE+tek2IWlgcTUcd2nQrM3iBTYkT5JUaAHfaxnRHNVmpIo1CrAqSGGqkbww1UjxBAivKUOo8xKPrbZONGIw9KuN1alTqD7aBvxnrmsdWNYvsfCFuFMoPKnUdF/lUTZ4RBEiVRaBTEm0iFIiIFURJtAiJNpNoEWi0qiBSBPn3rvq5trkE6UqFJQPPO5/zzu+2doLhcNWxLC4oUnqEc8ilretres+UsbjqmJqviKxJqVnLuTxJPDkBuA4AAQLAJ5S/Sa3kd8thuQkgmB6g8nNPOTK80Ji6WkhpZzQDBiXFjf3/n88ZWpkHUShG+GhgZno9tL5LjKGJvYUaqOx+hmAqe9Cw9Z9VlQRPkJdRafTfV1tX5XsrDVSbsKfZ1DxL0iabE+ZW/rJSNgWkBwlGMo50K893mN0vyJmq1Cpvmd2Af+XX6JZfcxt8LTx7Tw9qh+lqPx+P3z27EW1Mj6Z+4Tw8czrHV5evbiPH02wbYjAVsKrZWxKmkDyzDX4Az5ax+GelUanUUq9NirqeDKbMJ9bYpbuo+aC3ruH4zi3Xf0e7OsmNQd2v3K1uFRRdT9pQR9idMctcmrjSWRPSRcES/hcDdbtpy189/hKOu9RXSBqlOrs9tfk/66ieSO/6xPR2BH1zyE6tOF9RWJpptKtTuM1XD2pngcjqzqOZtr5IZ3SIEREJhItJiBFokxBqq0mIkikRFpQiLRA531ydKKeHwbYFSGrYtbMP4dK/ec+JtlA8zwnBcwmX6WbWGOx+IxIJtVqns/qLZKf8AIqzEdmIEGpyEi5MuLTlRYCBavLimWqj3lVMwK7yoGUXgNAvKZbbRvPT+n58YUyaguIRdQztPUFtS9LE4Qn9m61kB5VBlYDwBQH7c4jTe+vv8+M3Pqp2v8m2vQJNlr3w73P8AEtk/xFT3yUj6VkGLyLzKvJtOldM3zNfTj+fCWdkN7a+IPvFvwmRbUWmN2cuWq45AA+82mLP7a9Jf62PQ/tt4AD4X/GYLplsgY3Z9bD2GZkLUyeFRO8h94HoTMzhKmYFvnEkeXD4WkVltcc56xh8j1FIYggjmDvHgfGWKzHdfSbT1h7K+S7SrUwAFZhVS3zagzH+fOPSavWXS/KaRlOguKaltXBupsflNFT9Wo4Rx6qzD1n1SZ8c3sfzefRvVJ0ubaOENOs18Rhcq1TxqI1+zqeehB8RfjIN5iSZEBERAREQmLlpFpVAhUSZNog1ExPS2u1PZ2LqL7VPC4hlPIrScg/CZe05F1y9POzD7Lwxu9RSuMcfuKw/Yr9Jge8eANt50DjPdXdKhV8JbCcTGp0AgVPVkBCZcp0RLx0geapTyjfFJtJaxNS8mkYF+0ovKryLQKkMrJlKiTCIXQ+cvUcQ1NhUT26ZDoeTKcyn3gSyRJgfX+zsatehTroe7WppUQ+DqGHwMv3mj9Tm0u32PRUkFsMXoN4BGvTH/AK2SboTJixWwPCY2u5p1KpHGmGXz1X77TJieTH0b2bibL/MD+EzYphKWVR5S7UFxK7ACWnqgak2HObRw3rwweXG0qn8SgF/uVKl/9QTmTDhOk9dO1Ur4uiqEHsqdS/lUZMp/wzOcNCPAwsbTe+pnbCYXaqio4VMTTeiSzAIGJV6eYnTVkyjxcTSMQtmvzlowr7JIkETQepPbVXFbNK1mLHDVTSRySWKZFZQSd5GYjyAnQIFESTIgIiIF+JMQmIEm0RBjB9M9vrs7A1cUbFlGWip/eqNoi+V9T4Az5YxFZmdnYlmdizs29mYksx8ySZ3L/iCB/R1AjcMUt/Psa1vuM4Ur6czCqgt98q0H/wAlBv5SVpef4QJ7blKWVjqdBLnaKvnLKh6zrTQFmdgqKN7MxAVR4kkCB5n1PhLqGdQ6c9U/yPAJiqDl2oU1+XKdQT+/Wp8lBOq8hfgb8uUWgX1MuWlpTLgMCq0SIEJiYgRCOu9QG0cr4nClh38lVB+9cd1z4i3Z/m07NVXSfMvVfjTR2vhypA7UtSN+TqSB6sqifS4qNxA9JK0vIJbxKZio13393+8qSoeUVN4PgfjaQWKpztlB0HtH8JpvTjajZXpUdRTUmpl3k2PdXx/rNt7G9FlUkFrgke1v19d8x+E2FSTmeebUkniZrla+aNtYPEK6Vq6FflKE0w2hy08qjTgALCeC/CdB69cWP0nQorbLSwwvbg1So5I9yr75z0741lYxi7jPPaenGHujz/AzziFdW6mem2GwaPgcSRSFWr2lOsf2ZZlRClQ/ueyLNu1N7ce5T44tPoTqW6TnF4E4aoxNXBWW53tSa/ZH0sU+ypO+B0KQZVIMCmJVaTAuxEQ0REQOMf8AEXWYDBoGbKxrMVzHKWUIFYjcSAza+JnHcKZEQy9R3SxUOsRCLZ3zbuqRAduYQEA96qdRxGHqkHzBAPpEQr6arIGUqwBDAhgRcEEWIIO8Wnxu/tHziIFxZWJMQKoiICDEQjIdGDbH4Uj/ALnD/wCuk+uQIiSqmWqkmJIsWE9g+Z++eYxE0r5264z/ANaq/Vpf6STUzESRhZxXs+s86xEqqxOg9RbEbXIBOuHqg67+9TOvPURED6FkGIgTERA//9k= "
        image="https://images.unsplash.com/photo-1600800059444-e69a8af0113b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 "
        title="Shah Rukh Khan"
      />
      <Story
        image="https://images.unsplash.com/photo-1599687266197-6c66c083b39c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 "
        profileImg="https://images.unsplash.com/photo-1600527097450-569db51cf00d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80 "
        title="Juan Pablo"
      />
      <Story
        image="https://cdn.pixabay.com/photo/2020/08/29/08/31/woman-5526483_960_720.jpg "
        profileImg="https://images.unsplash.com/photo-1552334949-51934e5f2d38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80 "
        title="Baylee"
      />
    </div>
  );
}

export default StoryReel;
