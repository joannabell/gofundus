Rails.application.routes.draw do
  resources :sessions
  resources :users
  resources :signups
  resources :sponsors
  resources :sponsorships

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
