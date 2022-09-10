class CreateUserScore < ActiveRecord::Migration[7.0]
  def change
    create_table :user_scores do |t|
      t.references :user, type: :integer, null: false
      t.references :question, type: :integer, null: false
      t.integer :waypoint_status, null: false
      t.integer :score, null: false
      t.timestamps
    end

    add_index :user_scores, %i[user_id question_id waypoint_status], unique: true
  end
end
