import api from '../../Services'

export const NewFeed = {
   GetListNewFeed: () => {
      return (
         api
            .callNewFeed()
            .get('/getNewList.php')
      )
   }
}