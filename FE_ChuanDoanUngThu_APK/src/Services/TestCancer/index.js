import api from '../index'


export const TestCanncerAI = {
   Test: ({ baso, eos, mono, neu, lym, wbc, hct, hgb, rbc, mch, mchc, mcv, mpv, rdw, pdw, plt, tpttbm, pct, }) => {
      console.log("Danh sach Er:", baso, eos, mono, neu, lym, wbc, hct, hgb, rbc, mch, mchc, mcv, mpv, rdw, pdw, plt, tpttbm, pct,);
      return (
         api
            .callAI()
            .post('/icd/', {
               "baso": baso,
               "eos": eos,
               "mono": mono,
               "neu": neu,
               "lym": lym,
               "wbc": wbc,
               "hct": hct,
               "hgb": hgb,
               "rbc": rbc,
               "mch": mch,
               "mchc": mchc,
               "mcv": mcv,
               "mpv": mpv,
               "rdw": rdw,
               "pdw": pdw,
               "plt": plt,
               "tpttbm": tpttbm,
               "pct": pct
            })
      )
   },
}