class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

  def current_user
    User.find_by_id(session[:user_id])
  end

  def is_current_user?(user_id)
    current_user.id == user_id
  end

  def assure_current_user(user_id)
    render json: { error: 'Unauthorized' }, status: :unauthorized unless is_current_user?(user_id)
  end

  private

  def record_not_found(errors)
    render json: errors.message, status: :not_found
  end

  def invalid_record(invalid)
    render json: invalid.record.errors, status: :unprocessable_entity
  end
end
