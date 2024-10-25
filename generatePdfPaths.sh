#!/bin/bash

# Base directory containing the subjects
BASE_DIR="public/assets/cours"

# Array to hold subjects (ensure these match the actual folder names exactly)
declare -a subjects=("proba" "java" "bd" "reseau" "Conception" "Graphes" "TLA" "TLI" "ReseauMM")

# Create an associative array to hold PDF paths for each subject
declare -A pdfPaths

# Iterate through each subject and find PDFs
for subject in "${subjects[@]}"; do
  # Check if the directory exists
  if [ -d "$BASE_DIR/$subject" ]; then
    # Use `find` to get all PDF files and store them in an array
    pdfFiles=($(find "$BASE_DIR/$subject" -type f -name "*.pdf"))
    
    # Assign the PDF files to the associative array
    pdfPaths["$subject"]="${pdfFiles[@]}"
  else
    echo "Directory for subject '$subject' not found."
  fi
done

# Output the results
for subject in "${subjects[@]}"; do
  echo "PDF paths for subject '$subject':"
  if [ -n "${pdfPaths[$subject]}" ]; then
    # Split the string into an array for display
    IFS=' ' read -r -a pdfArray <<< "${pdfPaths[$subject]}"
    for pdf in "${pdfArray[@]}"; do
      echo "  - $pdf"
    done
  else
    echo "  - No PDFs found."
  fi
done

