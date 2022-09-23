# frozen_string_literal: true

ActiveRecord::Base.transaction(joinable: false, requires_new: true) do
  question = Question.create!(
    id: 1,
    description: 'LINEおばあちゃん問題',
  )

  (1..5).each do |user_index|
    user = User.create!(
      id: user_index,
      name: "かず#{user_index}",
    )

    (1..3).each do |waypoint_index|
      UserScore.create!(
        user:,
        question:,
        waypoint_status: waypoint_index,
        score: SecureRandom.random_number(100),
      )
    end
  end
end
