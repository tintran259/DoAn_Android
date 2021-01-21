import api from '../index'


export const GetListHistory = {
   HistoryUser: ({ userId }) => {
      return (
         api
            .callHisroty()
            .post('/getPredictRecordById.php',
               {
                  "user_id": userId
               })
      )
   },
   PostHistory: ({ baso, eos, hct, hgb, lym, mch, mchc, mcv, mono, mpv, neu, pct, pdw, plt, rbc, rdw, tpttbm, wbc, userId, timestamp, testResult }) => {
      return (
         api
            .callHisroty()
            .post('/savePredictRecord.php',
               {
                  "baso": baso,
                  "eos": eos,
                  "hct": hct,
                  "hgb": hgb,
                  "lym": lym,
                  "mch": mch,
                  "mchc": mchc,
                  "mcv": mcv,
                  "mono": mono,
                  "mpv": mpv,
                  "neu": neu,
                  "pct": pct,
                  "pdw": pdw,
                  "plt": plt,
                  "rbc": rbc,
                  "rdw": rdw,
                  "tpttbm": tpttbm,
                  "wbc": wbc,
                  "predict": testResult,
                  "timestamp": timestamp,
                  "user_id": userId,
               })
      )
   }
}