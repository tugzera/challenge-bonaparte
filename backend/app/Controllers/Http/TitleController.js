'use strict'

const Title = use('App/Models/Title')

class TitleController {
  async index({ request }) {
    const { search, page } = request.all()
    if (search) {
      const items = await Title.query()
        .with('rating')
        .where('primary_title', 'LIKE', '%' + search + '%')
        .orWhere('original_title', 'LIKE', '%' + search + '%')
        .paginate(page && page ? page : 1, 10)
      return items
    }
    const items = await Title.query()
      .with('rating')
      .paginate(page && page ? page : 1, 10)
    return items
  }

  async show({ params }) {
    const { code } = params
    const item = await Title.query().where('code', code).firstOrFail()
    return item
  }

  async store({ request }) {
    const count = await Title.query().count()
    const data = request.all()
    data.is_adult = data.is_adult === 'true' ? true : false
    data.code = `tt${count[0]['count(*)'] + Number(new Date().getTime())}`
    const item = await Title.create(data)
    return item
  }

  async update({ request, params }) {
    const data = request.all()
    const { code } = params
    const item = await Title.query().where('code', code).firstOrFail()
    item.merge(data)
    await item.save()
    return item
  }

  async destroy({ params }) {
    const { code } = params
    const item = await Title.query().where('code', code).firstOrFail()
    await item.delete()
  }
}

module.exports = TitleController
