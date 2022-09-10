# frozen_string_literal: true

class Question < ApplicationRecord
  has_many :user_scores, dependent: :destroy

  validates :description, presence: true
end
