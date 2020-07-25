'use strict'

const Title = use('App/Models/Title')

class TitleController {
  async index({ request }) {
    const { primary_title, page } = request.all()
    if (primary_title) {
      const items = await Title.query()
        .with('rating')
        .where('primary_title', 'LIKE', '%' + primary_title + '%')
        .orWhere('original_title', 'LIKE', '%' + primary_title + '%')
        .paginate(page ? page : 1, 10)
      return items
    }
    const items = await Title.query().with('rating').paginate(2, 10)
    return items
  }

  async show({ params }) {
    const { id } = params
    const item = await Title.query().where('code', id).firstOrFail()
    return item
  }

  async store({ request }) {
    const count = await Title.query().count()
    const data = request.all()
    data.code = `tt${count[0]['count(*)'] + 1}`
    const item = await Title.create(data)
    return item
  }

  async update({ request, params }) {
    const data = request.all()
    const { id } = params
    const item = await Title.query().where('code', id).firstOrFail()
    item.merge(data)
    await item.save()
    return item
  }

  async destroy({ params }) {
    const { id } = params
    const item = await Title.query().where('code', id).firstOrFail()
    await item.delete()
  }
}

module.exports = TitleController
