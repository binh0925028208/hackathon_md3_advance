import Answer from "../model/answer.model";

class AnswerRepository {
  async createAnswer(formRequest: any) {
    return await Answer.create(formRequest);
  }
}

export default AnswerRepository;
