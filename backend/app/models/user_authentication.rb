# frozen_string_literal: true

class UserAuthentication < ApplicationRecord
  # Include default devise modules.
  # NOTE: :confirmable はテスト用アカウントがアクティベートできないので削除している
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :posts, dependent: :destroy

  belongs_to :user
end
