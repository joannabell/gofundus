class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

  def login!(user)
    session[:session_token] = user.reset_token!
    cookies[:current_user] = {
      value: User.to_session_json(current_user),
      expires: Time.now + 1_209_600
    }
    @current_user = user
  end
  
  def logout!
    current_user.reset_token!
    cookies.delete(:current_user)
    session[:session_token] = nil
  end
  
  def logged_in?
    !!current_user
  end
  
  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
    @current_user
  end

  private

  def record_not_found(errors)
    render json: errors.message, status: :not_found
  end

  def invalid_record(invalid)
    render json: invalid.record.errors, status: :unprocessable_entity
  end
end
