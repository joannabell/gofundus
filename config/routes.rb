Rails.application.routes.draw do
  resources :sessions
  resources :users
  resources :signups
  resources :sponsors
  resources :sponsorships

end
